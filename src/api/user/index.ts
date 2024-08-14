import request from '@/utils/request'
import type { BaseResult } from '../commonType'
import type { LoginDTO, LoginVO } from './type'

enum API {
  GET_PUBLIC_KEY = '/user/get/publickey',
  LOGIN = '/web/roco/user/login'
}

export default {
  getPublicKey() {
    return request.get<any, BaseResult<string>>(API.GET_PUBLIC_KEY)
  },
  login(params: LoginDTO) {
    return request.post<any, BaseResult<LoginVO>>(API.LOGIN, params)
  }
}
