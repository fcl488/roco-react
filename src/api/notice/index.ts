import request from '@/utils/request'
import { GetNoticeListResData, GetNoticeInfoResData } from './type'
import { PageParam, IdDTO } from '../commonType' 

enum API {
  QUERY_NOTICE = '/web/roco/announcement/query',
  GET_NOTICE_INFO = '/web/roco/announcement/info'
}

export default {
  queryNotice(params: PageParam) {
    return request.post<any, GetNoticeListResData>(API.QUERY_NOTICE, params)
  },
  getNoticeInfo(params: IdDTO) {
    return request.post<any, GetNoticeInfoResData>(API.GET_NOTICE_INFO, params)
  }
}