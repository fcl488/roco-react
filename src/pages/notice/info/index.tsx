import noticeApi from '@/api/notice'
import { useState, useEffect } from 'react'
import type { IdDTO } from '@/api/commonType'
import PageBack from '@/compoments/pageBack'
import style from './index.module.scss'
import { NoticeInfoType } from '@/api/notice/type'
import { useSearchParams } from 'react-router-dom'

const noticeInfo = () => {
  const [noticeInfo, setNoticeInfo] = useState<NoticeInfoType>({
    title: '',
    content: '',
    publicTime: '',
    author: '',
  })
  const [searchParams] = useSearchParams()
  const getNoticeInfo = async () => {
    const dto: IdDTO = {
      id: Number(searchParams.get('noticeId')),
    }
    const res = await noticeApi.getNoticeInfo(dto)
    setNoticeInfo(res.data)
  }

  useEffect(() => {
    getNoticeInfo()
  }, [])

  return (
    <>
      <PageBack url='/layout/notice'></PageBack>
      <div className={style.notice}>
        <div className={style.title}>{noticeInfo.title}</div>
        <div className={style.tips}>
          <span>{noticeInfo.publicTime}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>{noticeInfo.author}</span>
        </div>
        <div className={style.content}>{noticeInfo.content}</div>
      </div>
    </>
  )
}

export default noticeInfo
