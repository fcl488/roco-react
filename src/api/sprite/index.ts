import request from '@/utils/request'
import type { GetAllTypeResData, QuerySpriteResData, QuerySpriteDTO } from './type'

enum API {
  GET_ALL_TYPE = '/web/roco/type/all',
  QUERY_SPRITE = '/web/roco/sprite/query'
}


export default {
  getAllType() {
    return request.post<any, GetAllTypeResData>(API.GET_ALL_TYPE)
  },
  querySprite(params: QuerySpriteDTO) {
    return request.post<any, QuerySpriteResData>(API.QUERY_SPRITE, params)
  }
}