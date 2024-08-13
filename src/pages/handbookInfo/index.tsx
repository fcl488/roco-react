import style from './index.module.scss'
import { Image, Descriptions, Table } from 'antd'
import type { DescriptionsProps } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useSearchParams, useNavigate } from 'react-router-dom'

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '编号',
    children: '0001',
  },
  {
    key: '2',
    label: '精灵名称',
    children: '妙蛙种子',
  },
  {
    key: '3',
    label: '属性',
    children: '主属性：草   副属性：毒',
  },
  {
    key: '4',
    label: '组别',
    children: '植物组',
  },
  {
    key: '5',
    label: '血脉',
    children: '深绿',
  },
  {
    key: '6',
    label: '身高',
    children: '1.3m',
  },
  {
    key: '7',
    label: '体重',
    children: '3kg',
  },
  {
    key: '8',
    label: '颜色',
    children: '深绿',
  },
  {
    key: '9',
    label: '经验类型',
    children: '100',
  },
  {
    key: '10',
    label: '爱好',
    children: '100',
  },
  {
    key: '11',
    label: '简介',
    children: '100',
  },
  {
    key: '12',
    label: '获取方式',
    children: '100',
  },
]

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

const abilityDataSource = [
  {
    key: '1',
    hp: '100',
    attack: '100',
    defense: '100',
    special_attack: '100',
    special_defense: '100',
    speed: '100',
  },
]

const skillDataSource = [
  {
    learnLevel: 0,
    skillName: '猛烈撞击',
    skillCategory: '物理',
    skillType: '普通',
    skillPower: 35,
    skillDesc: '全力撞击对手saffds发顺丰我是法师打发士大夫色都分给色',
    pp: 35,
  },
]

const HandbookInfo = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const spriteId = searchParams.get('spriteId')

  const goBack = () => {
    navigate('/layout/handbook', { replace: false })
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
            <Image
              width={500}
              src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            />
          </div>
          <div className={style.container_info_desc}>
            <Descriptions items={items} />
          </div>
        </div>
        <div className={style.container_racial}>
          <Table
            dataSource={abilityDataSource}
            columns={abilityColumns}
            pagination={false}
          />
        </div>
        <div className={style.container_evolution_chain}>
          <div className={style.container_evolution_chain_item}>
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
          </div>
        </div>
        <div className={style.container_skill}>
          <Table
            rowKey={(record) => record.skillName}
            pagination={false}
            columns={skillColunms}
            dataSource={skillDataSource}
          />
        </div>
      </div>
    </>
  )
}

export default HandbookInfo
