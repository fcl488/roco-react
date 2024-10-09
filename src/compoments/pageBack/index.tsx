import style from './index.module.scss'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

interface pageBackProps {
  url: string
}

const PageBack = (props: pageBackProps) => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(props.url, {replace: false})
  }

  return (
    <>
      <div className={style.container_back}>
          <div className={style.container_back_box} onClick={() => goBack()}>
            <LeftOutlined /> 返回
          </div>
        </div>
    </>
  )
}

export default PageBack