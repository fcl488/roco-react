import { BaseResult, PageVO } from '../commonType'

export type NoticeType = {
  id: number
  title: string
  publicTime: string
}

export type NoticeList = PageVO & {
  list: NoticeType[]
}

export type NoticeInfoType = {
  title: string
  content: string
  publicTime: string
  author: string
}


export type GetNoticeListResData = BaseResult<NoticeList>
export type GetNoticeInfoResData = BaseResult<NoticeInfoType>