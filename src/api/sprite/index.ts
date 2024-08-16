import request from '@/utils/request'
import type { GetAllTypeResData, QuerySpriteResData, QuerySpriteDTO, GetSpriteInfoResData, GetSkillInfoResData, GetSpriteEvolutionListResData } from './type'
import type { IdDTO } from '@/api/commonType'

enum API {
  GET_ALL_TYPE = '/web/roco/type/all',
  QUERY_SPRITE = '/web/roco/sprite/query',
  GET_SPRITE_INFO = '/web/roco/sprite/info',
  GET_SKILL_INFO = '/web/roco/sprite/skill',
  GET_EVOLUTIION_LIST = '/web/roco/sprite/evolutionList'
}


export default {
  getAllType() {
    return request.post<any, GetAllTypeResData>(API.GET_ALL_TYPE)
  },
  querySprite(params: QuerySpriteDTO) {
    return request.post<any, QuerySpriteResData>(API.QUERY_SPRITE, params)
  },
  getSpriteInfo(params: IdDTO) {
    return request.post<any, GetSpriteInfoResData>(API.GET_SPRITE_INFO, params)
  },
  getSkillInfo(params: IdDTO) {
    return request.post<any, GetSkillInfoResData>(API.GET_SKILL_INFO, params)
  },
  GetSpriteEvolutionList(params: IdDTO) {
    return request.post<any, GetSpriteEvolutionListResData>(API.GET_EVOLUTIION_LIST, params)
  }
}