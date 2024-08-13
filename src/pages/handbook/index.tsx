import style from './index.module.scss'
import { useState } from 'react'
import { Input } from 'antd'
import { Select } from 'antd'
import { Card, Col, Row, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import Type from '@/compoments/type'

const { Search } = Input


interface handbook {
  id: string
  name: string
  imgUrl: string
  types: type[]
}

interface type {
  name: string
  type: string
}

const Handbook = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const [handbookList, setHandbookList] = useState<handbook[]>([
    {
      id: '0001',
      name: '妙蛙种子',
      imgUrl:
        'https://www.pokemon.cn/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png',
      types: [
        {
          type: 'grass',
          name: '草',
        },
        {
          type: 'poison',
          name: '毒',
        },
      ],
    },
    {
      id: '0002',
      name: '妙蛙草',
      imgUrl:
        'https://www.pokemon.cn/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png',
      types: [
        {
          type: 'grass',
          name: '草',
        },
        {
          type: 'poison',
          name: '毒',
        },
      ],
    },
  ])
  const navigate = useNavigate()
  const loadMore = () => {
    const t: handbook[] = [
      {
        id: '0003',
        name: '妙蛙花',
        imgUrl:
          'https://www.pokemon.cn/play/resources/pokedex/img/pm/0186d64c5773c8d3d03cd05dc79574b2d2798d4f.png',
        types: [
          {
            type: 'grass',
            name: '草',
          },
          {
            type: 'poison',
            name: '毒',
          },
        ],
      },
    ]
    setHandbookList([...handbookList, ...t])
  }

  const toInfoPage = (spriteId: string) => {
    navigate('/layout/handbookInfo?spriteId=' + Number(spriteId), { replace: false })
  }

  const renderHandbook = handbookList.map((item) => {
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
          <div className={style.handbook_list_card_name}>{item.name}</div>
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

  return (
    <>
      <div className={style.search_area}>
        <Search
          placeholder='使用名称或图鉴编号搜索'
          enterButton='Search'
          size='large'
        />
      </div>
      <div className={style.category_area}>
        <div className={style.category_area_title}>属性</div>
        <div className={style.category_area_list}>
          <label
            className={`${style.category_area_list_type} ${style.category_area_list_type_normal}`}
          >
            <span>普通</span>
          </label>
          <label
            className={`${style.category_area_list_type} ${style.category_area_list_type_fire}`}
          >
            <span>火</span>
          </label>
        </div>
      </div>
      <div className={style.banner}>
        <Select
          defaultValue='图鉴编号由小至大'
          style={{ width: 200, height: 30 }}
          onChange={handleChange}
          options={[
            { value: '0', label: '图鉴编号由小至大' },
            { value: '1', label: '图鉴编号由大至小' },
          ]}
        />
      </div>
      <div className={style.handbook_list}>
        <Row gutter={[16, 16]}>{renderHandbook}</Row>
      </div>
      <div className={style.load_more}>
        <div className={style.load_more_btn} onClick={() => loadMore()}>
          <span>查看更多</span>
        </div>
      </div>
    </>
  )
}

export default Handbook
