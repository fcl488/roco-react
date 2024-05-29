import axios from 'axios'
import { useSelector } from 'react-redux'
import { message } from 'antd'


const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = useSelector((state:any) => state.user.token)
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => {
    console.log(res)
    if(res.data.code === 0) {
      message.error(res.data.message)
    }
    return res.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default request
