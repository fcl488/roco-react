import { Spin } from 'antd'
import style from './index.module.scss'

const Spinner = () => {
  return (
    <>
      <div className={style.container}>
        <Spin fullscreen size='large' tip='加载中'></Spin>
      </div>
    </>
  )
}

export default Spinner
