import style from './index.module.scss'
import { Image, Descriptions, Table, Tooltip, Empty } from 'antd'
import type { DescriptionsProps } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import spriteApi from '@/api/sprite/index'
import type {
  SpriteInfo,
  SkillInfo,
  SpriteEvolutionList,
  SpriteEvolution,
} from '@/api/sprite/type'
import type { IdDTO } from '@/api/commonType'

const abilityColumns = [
  {
    title: '血量',
    dataIndex: 'hp',
    key: 'hp',
  },
  {
    title: '攻击',
    dataIndex: 'attack',
    key: 'attack',
  },
  {
    title: '防御',
    dataIndex: 'defense',
    key: 'defense',
  },
  {
    title: '特攻',
    dataIndex: 'special_attack',
    key: 'special_attack',
  },
  {
    title: '特防',
    dataIndex: 'special_defense',
    key: 'special_defense',
  },
  {
    title: '速度',
    dataIndex: 'speed',
    key: 'speed',
  },
]

const skillColunms = [
  {
    title: '学习等级',
    dataIndex: 'learnLevel',
    render: (learnLevel: number) => (learnLevel === 0 ? '-' : learnLevel),
    key: 'learnLevel',
  },
  {
    title: '技能名称',
    dataIndex: 'skillName',
    key: 'skillName',
  },
  {
    title: '技能属性',
    dataIndex: 'skillType',
    key: 'skillType',
  },
  {
    title: '技能类别',
    dataIndex: 'skillCategory',
    key: 'skillCategory',
  },
  {
    title: '技能威力',
    dataIndex: 'skillPower',
    render: (skillPower: number) => (skillPower === 0 ? '-' : skillPower),
    key: 'skillPower',
  },
  {
    title: '技能描述',
    dataIndex: 'skillDesc',
    key: 'skillDesc',
  },
  {
    title: 'pp',
    dataIndex: 'pp',
    key: 'pp',
  },
]

type SpriteAbilityType = {
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
  key: string
}

const HandbookInfo = () => {
  const [searchParams] = useSearchParams()
  const [spriteInfo, setSpriteInfo] = useState<SpriteInfo>()
  const [descItems, setDescItems] = useState<DescriptionsProps['items']>([])
  const [spriteAbility, setSpriteAbility] = useState<SpriteAbilityType[]>([
    {
      hp: 0,
      attack: 0,
      defense: 0,
      special_attack: 0,
      special_defense: 0,
      speed: 0,
      key: '1',
    },
  ])
  const [skillList, setSkillList] = useState<SkillInfo[]>([])
  const [evolutionList, setEvolutionList] = useState<SpriteEvolution[][]>([[]])
  const navigate = useNavigate()
  let params: IdDTO = {
    id: Number(searchParams.get('spriteId')),
  }
  useEffect(() => {
    const getSpriteInfo = async () => {
      const res = await spriteApi.getSpriteInfo(params)
      setSpriteInfo(res.data)
      let items: DescriptionsProps['items'] = []
      items.push({
        label: '编号',
        children: res.data.id,
      })
      items.push({
        label: '精灵名称',
        children: res.data.spriteName,
      })
      items.push({
        label: '属性',
        children: res.data.mainType,
      })
      if ('' !== res.data.subtype) {
        items.push({
          label: '副属性',
          children: res.data.subtype,
        })
      }
      items.push({
        label: '组别',
        children: res.data.groupType,
      })
      if (res.data.bloodList.length === 1) {
        items.push({
          label: '第一血脉',
          children: (
            <Tooltip title={res.data.bloodList[0].bloodDesc}>
              <span>{res.data.bloodList[0].bloodName}</span>
            </Tooltip>
          ),
        })
      }
      if (res.data.bloodList.length === 2) {
        items.push({
          label: '第一血脉',
          children: (
            <Tooltip title={res.data.bloodList[0].bloodDesc}>
              <span>{res.data.bloodList[0].bloodName}</span>
            </Tooltip>
          ),
        })
        items.push({
          label: '第二血脉',
          children: (
            <Tooltip title={res.data.bloodList[1].bloodDesc}>
              <span>{res.data.bloodList[1].bloodName}</span>
            </Tooltip>
          ),
        })
      }
      items.push({
        label: '身高',
        children: res.data.height,
      })
      items.push({
        label: '体重',
        children: res.data.weight,
      })
      items.push({
        label: '颜色',
        children: res.data.spriteColor,
      })
      items.push({
        label: '经验类型',
        children: res.data.expType,
      })
      items.push({
        label: '爱好',
        children: res.data.spriteHobby,
      })
      items.push({
        label: '简介',
        children: res.data.spriteDescription,
      })
      items.push({
        label: '获取方式',
        children: res.data.spriteGetWay,
      })
      setDescItems(items)
      setSpriteAbility([
        {
          hp: res.data.hp,
          attack: res.data.atk,
          defense: res.data.def,
          special_attack: res.data.spAtk,
          special_defense: res.data.spDef,
          speed: res.data.speed,
          key: '1',
        },
      ])
    }
    const getSkillInfo = async () => {
      let res = await spriteApi.getSkillInfo(params)
      setSkillList(res.data)
    }
    const getEvolutionList = async () => {
      let res = await spriteApi.GetSpriteEvolutionList(params)
      setEvolutionList(res.data)
    }
    getSpriteInfo()
    getSkillInfo()
    getEvolutionList()
  }, [])

  const goBack = () => {
    navigate('/layout/handbook', { replace: false })
  }

  const renderEvolutionList = evolutionList.map((item, index) => {
    return (
      <div key={index} className={style.container_evolution_chain_item}>
        {item.map((el) => {
          return (
            <>
              <Image
                key={el.spriteId}
                preview={false}
                width={200}
                src={el.spriteImg}
              />
            </>
          )
        })}
      </div>
    )
  })

  const RenderEvolutionListArea: () => JSX.Element = () => {
    if (evolutionList && evolutionList.length > 0) {
      return <>{renderEvolutionList}</>
    }
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description='暂无进化链信息'
      />
    )
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.container_back}>
          <div className={style.container_back_box} onClick={() => goBack()}>
            <LeftOutlined /> 返回
          </div>
        </div>
        <div className={style.container_info}>
          <div className={style.container_info_img}>
            <Image width={500} src={spriteInfo?.spriteImg} />
          </div>
          <div className={style.container_info_desc}>
            <Descriptions
              items={descItems}
              labelStyle={{ fontSize: '1.3rem' }}
              contentStyle={{ fontSize: '1.3rem' }}
            />
          </div>
        </div>
        <div className={style.container_racial}>
          <Table
            dataSource={spriteAbility}
            columns={abilityColumns}
            pagination={false}
          />
        </div>
        <div className={style.container_evolution_chain}>
          {/* <div className={style.container_evolution_chain_item}>
            <Image
              preview={false}
              width={200}
              src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            />
          </div>
          <div className={style.container_evolution_chain_item}>
            <Image
              preview={false}
              width={90}
              src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            />
            <Image
              preview={false}
              width={90}
              src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            />
          </div> */}
          <RenderEvolutionListArea />
        </div>
        <div className={style.container_skill}>
          <Table
            rowKey={(record) => record.skillName}
            pagination={false}
            columns={skillColunms}
            dataSource={skillList}
          />
        </div>
      </div>
    </>
  )
}

export default HandbookInfo
