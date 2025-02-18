import { Button, Form, Input, Card, message, Col, Row } from 'antd'
import style from './index.module.scss'
import userApi from '@/api/user'
import { GetVerifyCodeDTO, RegisterDTO } from '@/api/user/type'
import { useState } from 'react'
import rsaUtil from '@/utils/rsaUtil'
import { useNavigate } from 'react-router-dom'

type FieldType = {
  account?: string
  password?: string
  repassword?: string
  verifyCode?: string
}

const Register = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()
  const onFinish = async (values: FieldType) => {
    const publicKeyRes = await userApi.getPublicKey()
    const dto: RegisterDTO = {
      email: values.account as string,
      password: rsaUtil.encode(values.password as string, publicKeyRes.data),
      rePassword: rsaUtil.encode(values.repassword as string, publicKeyRes.data),
      verifyCode: values.verifyCode as string,
    }
    const res = await userApi.register(dto)
    if (res.code === 0) {
      messageApi.success('注册成功,请前往登录页面').then(() => {
        navigate('/login', {
          replace: false,
        })
      })
    } else {
      messageApi.error('注册失败,如有问题请联系1397697356@qq.com')
    }
  }

  const onFinishFailed = (_values: any) => {
    messageApi.error('Please enter correct information')
  }

  const getVerifyCode = async () => {
    console.log('获取邮箱验证码')
    const dto: GetVerifyCodeDTO = {
      email: email,
      type: 100,
    }
    const res = await userApi.getVerifyCode(dto)
    if (res.code === 0) {
      messageApi.success('验证码发送成功,请前往邮箱查看')
    } else {
      messageApi.error('验证码发送失败,如有问题请联系1397697356@qq.com')
    }
  }

  return (
    <>
      {contextHolder}
      <div className={style.container}>
        <div className={style.register_area}>
          <Card
            title={
              <div style={{ textAlign: 'center', fontSize: '24px' }}>
                Register
              </div>
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
              <Form.Item<FieldType>
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
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label='密码'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                label='重新输入密码'
                name='repassword'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password again!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label='输入验证码'
                extra='We must make sure that your are a human.'
              >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item<FieldType>
                      name='verifyCode'
                      rules={[
                        {
                          required: true,
                          message: 'Please input your verify code!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button type='primary' onClick={() => getVerifyCode()}>
                      get verify code
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button
                  type='primary'
                  htmlType='submit'
                  className={style.register_btn}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div className={style.tips}>
              已有账号 &nbsp;{' '}
              <span>
                <a href='#/login'>去登录</a>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Register
