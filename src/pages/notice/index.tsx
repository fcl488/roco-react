import style from './index.module.scss'
import { Card, Pagination } from 'antd'
import { useState, useEffect } from 'react'
import { NoticeType } from '@/api/notice/type'
import noticeApi from '@/api/notice'
import { PageParam } from '@/api/commonType'
import { useNavigate } from 'react-router-dom'

const Notices = () => {
  const [currentPage, setCurrnetPage] = useState<number>(1)
  const [noticeList, setNoticeList] = useState<NoticeType[]>([])
  const [totalNoticeCount, setTotalNoticeCount] = useState<number>(0)
  const navigate = useNavigate()

  const queryNotice = async () => {
    const dto: PageParam = {
      page: currentPage,
      limit: 30,
    }
    const res = await noticeApi.queryNotice(dto)
    setNoticeList(res.data.list)
    setTotalNoticeCount(Number(res.data.total))
  }

  useEffect(() => {
    queryNotice()
  }, [currentPage])

  const toInfoPage = (id: number) => {
    console.log(id)
    navigate('/layout/noticeInfo?noticeId=' + id, {replace: false})
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.notice}>
          {noticeList.map((item) => {
            return (
              <Card
                key={ item.id }
                style={{ marginBottom: 20 }}
                styles={{
                  body: {
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                  },
                }}
                hoverable={true}
                onClick={() => {
                  toInfoPage(item.id)
                }}
              >
                <div className={style.card_area}>
                  <div className={style.title}>{item.title}</div>
                  <div className={style.other}>
                    <div className={style.sub_time}>{item.publicTime}</div>
                  </div>
                </div>
              </Card>
            )
          })}
          <div className={style.page_area}>
            <Pagination
              defaultCurrent={currentPage}
              total={totalNoticeCount}
              defaultPageSize={30}
              onChange={(page, _pageSize) => setCurrnetPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Notices
