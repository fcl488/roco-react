import request from '@/utils/request'
import type { BaseResult, CommonRes } from '../commonType'
import type { LoginDTO, LoginVO, GetVerifyCodeDTO, RegisterDTO } from './type'

enum API {
  GET_PUBLIC_KEY = '/user/get/publickey',
  LOGIN = '/web/roco/user/login',
  GET_VERIFY_CODE = '/web/roco/user/sendverifycode',
  REGISTER = '/web/roco/user/register'
}

export default {
  getPublicKey() {
    return request.get<any, BaseResult<string>>(API.GET_PUBLIC_KEY)
  },
  login(params: LoginDTO) {
    return request.post<any, BaseResult<LoginVO>>(API.LOGIN, params)
  },
  getVerifyCode(params: GetVerifyCodeDTO) {
    return request.post<any, CommonRes>(API.GET_VERIFY_CODE, params)
  },
  register(params: RegisterDTO) {
    return request.post<any, CommonRes>(API.REGISTER, params)
  }
}
