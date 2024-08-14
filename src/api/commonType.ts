export type BaseResult<T> = {
  code: number,
  message: string,
  data: T
}

export type PageParam = {
  page: number,
  limit: number
}

export type PageVO = {
  total: string
}

export type CommonRes = BaseResult<any>