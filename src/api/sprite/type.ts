import { BaseResult,PageVO } from '../commonType'

export type SpriteType = {
  id: number,
  typeCode: string,
  typeName: string,
  typeIcon: string
}

export type SpriteInfoType = {
  type: string,
  name: string
}

export type Sprite = {
  id: number,
  spriteName: string,
  imgUrl: string,
  types: SpriteInfoType[]
}

export type SpriteList = PageVO & {
  list: Sprite[]
}

export type QuerySpriteDTO = {
  page: number,
  limit: number,
  keyword?: string,
  type?: number,
  sort?: number
}

export type GetAllTypeResData = BaseResult<SpriteType[]>
export type QuerySpriteResData = BaseResult<SpriteList>