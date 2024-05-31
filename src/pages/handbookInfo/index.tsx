import style from './index.module.scss'
import { Image, Descriptions, Table } from 'antd'
import type { DescriptionsProps } from 'antd'

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

const columns = [
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

const dataSource = [
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

const HandbookInfo = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container_back}></div>
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
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
        <div className={style.container_evolution_chain}></div>
        <div className={style.container_skill}></div>
      </div>
    </>
  )
}

export default HandbookInfo
