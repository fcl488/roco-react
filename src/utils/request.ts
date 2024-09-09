import axios from 'axios'
import { message } from 'antd'
import store from '@/store'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})


request.interceptors.request.use(
  (config) => {
    config.headers['token'] = store.getState().user.token ? store.getState().user.token : ''
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    let res = response.data
    if (res.code === 0) {
      return res
    } else if (res.code === 40000 || res.code === 40100 || res.code === 40101 || res.code === 40400 || res.code === 50000) {
      // 40100 如果未登录跳转到登录页面
      message.error(res.message)
      if (40100 === res.code) {
        window.location.href = '#/login'
      }
      return Promise.reject(new Error(res.message))
    } else {
      return res
    }
  },
  (error) => {
    console.log(error)
    message.error(error.message)
    window.location.href = '#/login'
    return Promise.reject(error)
  }
)

export default request
