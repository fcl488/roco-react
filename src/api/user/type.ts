export type LoginDTO = {
  account?: string
  password?: string
}

export type LoginVO = {
  token: string
}

export type GetVerifyCodeDTO = {
  email: string,
  type: number
}

export type RegisterDTO = {
  email: string
  password: string
  rePassword: string
  verifyCode: string
}