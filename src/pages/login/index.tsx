import { Button, Form, Input, Card, message } from 'antd'
import style from './index.module.scss'
import type { LoginDTO } from '@/api/user/type'
import { useEffect, useState } from 'react'
import userApi from '@/api/user/index'
import rsaUtil from '@/utils/rsaUtil'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTokenInfo } from '@/store/model/user'

const Login = () => {
  const [publicKey, setPublicKey] = useState<string>('')
  const [messageApi, contextHolder] = message.useMessage()
  const user = useSelector((store: any) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = (values: LoginDTO) => {
    try {
      values.password = rsaUtil.encode(values.password as string, publicKey)
      userApi.login(values).then(res => {
        // console.log(res.data.token)
        dispatch(setTokenInfo(res.data.token))
        // store.dispatch({
        //   payload: res.data.token,
        //   type: 'setTokenInfo'
        // })
        localStorage.removeItem('roco_layout_act')
        navigate('/layout/home', { replace: false })
      })
    } catch (error) {
      messageApi.error('login failed')
    }
  }

  const onFinishFailed = (_values: any) => {
    messageApi.error('Please enter correct information')
  }

  useEffect(() => {
    console.log(user.token)
    const getPublicKey = async () => {
      const res = await userApi.getPublicKey()
      setPublicKey(res.data)
    }
    getPublicKey()
  }, [])

  return (
    <>
      {contextHolder}
      <div className={style.container}>
        <div className={style.login_area}>
          <Card
            title={
              <div style={{ textAlign: 'center', fontSize: '24px' }}>Login</div>
            }
            bordered={false}
            style={{ width: 500 }}
          >
            <Form
              name='basic'
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item<LoginDTO>
                label='邮箱'
                name='account'
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item<LoginDTO>
                label='密码'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button
                  type='primary'
                  htmlType='submit'
                  className={style.login_btn}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div className={style.tips}>
              没有账号 &nbsp;{' '}
              <span>
                <a href='#/register'>去注册</a>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Login
