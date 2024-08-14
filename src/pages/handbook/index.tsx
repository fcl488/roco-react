import style from './index.module.scss'
import { useState, useEffect } from 'react'
import { Input, Select, Card, Col, Row, Image, Empty } from 'antd'
import { useNavigate } from 'react-router-dom'
import Type from '@/compoments/type'
import type { SpriteType, QuerySpriteDTO, Sprite } from '@/api/sprite/type'
import spriteApi from '@/api/sprite/index'
const { Search } = Input

const Handbook = () => {
  const navigate = useNavigate()
  const [typeActive, setTypeActive] = useState<number>(0)
  const [typeList, setTypeList] = useState<SpriteType[]>([])
  const [spriteList, setSprietList] = useState<Sprite[]>([])
  const [totalSpriteCount, setTotalSpriteCount] = useState<number>(0)
  const [currentPage, setCurrnetPage] = useState<number>(1)
  const [queryKeyword, setQueryKeyword] = useState<string>('')
  const [sortFlag, setSortFlag] = useState<number>(0)

  useEffect(() => {
    const getAllTypes = async () => {
      const res = await spriteApi.getAllType()
      setTypeList(res.data)
    }
    getAllTypes()
    querySprite()
  }, [])

  useEffect(() =>{
    querySprite()
  }, [typeActive, currentPage, queryKeyword, sortFlag])

  const querySprite = async () => {
    const dto: QuerySpriteDTO = {
      page: currentPage,
      limit: 2,
      keyword: queryKeyword,
      sort: sortFlag,
      type: typeActive,
    }
    const res = await spriteApi.querySprite(dto)
    setSprietList([...spriteList, ...res.data.list])
    setTotalSpriteCount(Number(res.data.total))
  }

  const handleChange = (value: number) => {
    setSortFlag(value)
    setSprietList([])
    setCurrnetPage(1)
  }

  const loadMore = () => {
    if (spriteList.length >= totalSpriteCount) {
      return
    }
    setCurrnetPage(currentPage + 1)
  }

  const toInfoPage = (spriteId: number) => {
    navigate('/layout/handbookInfo?spriteId=' + spriteId, {
      replace: false,
    })
  }

  const changeType = (typeId: number) => {
    if (typeId === typeActive) {
      return
    }
    setTypeActive(typeId)
    setCurrnetPage(1)
    setSprietList([])
  }

  const changeKeyword = (value:string) => {
    if(value === queryKeyword) {
      return
    }
    setQueryKeyword(value)
    setCurrnetPage(1)
  }

  const renderTypeList = typeList.map((item) => {
    return (
      <label
        className={`${style.category_area_list_type} ${
          style[`category_area_list_type_${item.typeCode}`]
        } ${
          item.id === typeActive &&
          style[`category_area_list_type_${item.typeCode}_active`]
        }`}
        onClick={() => changeType(item.id)}
        key={item.id}
      >
        <span>{item.typeName}</span>
      </label>
    )
  })

  const renderHandbook = spriteList.map((item) => {
    return (
      <Col span={6} key={item.id}>
        <Card
          hoverable
          className={style.handbook_list_card}
          onClick={() => toInfoPage(item.id)}
        >
          <div className={style.handbook_list_card_img}>
            <Image width={200} preview={false} src={item.imgUrl} />
          </div>
          <div className={style.handbook_list_card_number}>{item.id}</div>
          <div className={style.handbook_list_card_name}>{item.spriteName}</div>
          <div className='type' style={{ display: 'flex' }}>
            {item.types.map((el) => {
              return (
                <Type key={el.type} typeStr={el.type} name={el.name}></Type>
              )
            })}
          </div>
        </Card>
      </Col>
    )
  })

  const RenderHandbookArea: () => JSX.Element = () => {
    if (spriteList.length === 0) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    } else {
      return <Row gutter={[16, 16]}>{renderHandbook}</Row>
    }
  }

  return (
    <>
      <div className={style.search_area}>
        <Search
          placeholder='使用名称或图鉴编号搜索'
          enterButton='Search'
          size='large'
          onSearch={changeKeyword}
        />
      </div>
      <div className={style.category_area}>
        <div className={style.category_area_title}>属性</div>
        <div className={style.category_area_list}>
          <label
            className={`${style.category_area_list_type} ${
              style.category_area_list_type_all
            } ${typeActive === 0 && style.category_area_list_type_all_active}`}
            onClick={() => changeType(0)}
          >
            <span>全部</span>
          </label>
          {renderTypeList}
        </div>
      </div>
      <div className={style.banner}>
        <Select
          defaultValue={0}
          style={{ width: 200, height: 30 }}
          onChange={handleChange}
          options={[
            { value: 0, label: '图鉴编号由小至大' },
            { value: 1, label: '图鉴编号由大至小' },
          ]}
        />
      </div>
      <div className={style.handbook_list}>
        <RenderHandbookArea />
      </div>
      <div className={style.load_more}>
        <div
          className={`${style.load_more_btn} ${
            spriteList.length >= totalSpriteCount && style.load_more_btn_finish
          }`}
          onClick={() => loadMore()}
        >
          <span>
            {spriteList.length >= totalSpriteCount ? '已全部加载' : '查看更多'}
          </span>
        </div>
      </div>
    </>
  )
}

export default Handbook
