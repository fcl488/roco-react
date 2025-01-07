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

export type IdDTO = {
  id: number
}

export type CommonRes = BaseResult<any>