import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

request.interceptors.request.use(
  (config) => {
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
    return res.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default request
