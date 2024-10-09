import { Outlet } from 'react-router-dom'
import style from './index.module.scss'
import { useState, useEffect } from 'react'
import { Affix, Dropdown, Avatar } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { removeToken } from '@/utils/token'

const styles = {
  nav_item_notice_active: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#03a9f4',
    color: '#fff',
  },
  nav_item_handbook_active: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#ff9600',
    color: '#fff',
  },
  nav_item_news_active: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#4caf50',
    color: '#fff',
  },
}

const Layout = () => {
  const [isActive, setIsActive] = useState<number>(-1)

  const changeActive = (param: number) => {
    setIsActive(param)
    localStorage.setItem('roco_layout_act', param.toString())
  }

  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
    setIsActive(Number(localStorage.getItem('roco_layout_act') ?? -1))
    if('/layout/home' === location.pathname) {
      setIsActive(-1)
    }
    if('/layout/notice' === location.pathname) {
      setIsActive(0)
    }
    if('/layout/handbook' === location.pathname) {
      setIsActive(1)
    }
    if('/layout/news' === location.pathname) {
      setIsActive(2)
    }
  }, [])

  const navigate = useNavigate()

  const toUserInfoPage = () => {
    navigate('/layout/userInfo', { replace: false })
  }

  const logout = () => {
    removeToken()
    localStorage.removeItem('roco_layout_act')
    navigate('/login', { replace: false })
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <div
          onClick={() => {
            toUserInfoPage()
          }}
        >
          个人信息
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div
          onClick={() => {
            logout()
          }}
        >
          退出登录
        </div>
      ),
      key: '1',
    },
  ]

  return (
    <>
      <Affix offsetTop={0} className={style.ant_affix}>
        <div className={style.header}>
          <div className={style.header_body}>
            <div className={style.header_title}>
              <a href='#/layout/home' onClick={() => changeActive(-1)}>
                {/* <img src='https://www.pokemon.cn/img/common/logo.png' alt='' /> */}
                <img
                  width={130}
                  height={48}
                  src='http://ossweb-img.qq.com/images/roco/act/a20110727lkwg/face/1year/9.gif'
                  alt=''
                />
              </a>
            </div>
            <div className={style.nav}>
              <div className={style.nav_body}>
                <ul className={style.nav_list}>
                  <li
                    className={style.nav_item}
                    onClick={() => changeActive(0)}
                  >
                    <a
                      href='#/layout/notice'
                      className={style.nav_item_notice}
                      style={
                        isActive === 0
                          ? styles.nav_item_notice_active
                          : undefined
                      }
                    >
                      <span>站内公告</span>
                    </a>
                  </li>
                  <li
                    className={style.nav_item}
                    onClick={() => changeActive(1)}
                  >
                    <a
                      href='#/layout/handbook'
                      className={style.nav_item_library}
                      style={
                        isActive === 1
                          ? styles.nav_item_handbook_active
                          : undefined
                      }
                    >
                      <span>洛克图鉴</span>
                    </a>
                  </li>
                  <li
                    className={style.nav_item}
                    onClick={() => changeActive(2)}
                  >
                    <a
                      href='#/layout/news'
                      className={style.nav_item_news}
                      style={
                        isActive === 2 ? styles.nav_item_news_active : undefined
                      }
                    >
                      <span>新闻公告</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </Affix>

      <div className={style.container}>
        <div className={style.container_content}>
          <Outlet />
        </div>
      </div>
      <footer className={style.footer}>
        <div className={style.content}>
          本网站纯纯为爱发电，如有版权问题或者其他问题请联系1397697356@qq.com告知。
        </div>
      </footer>
    </>
  )
}

export default Layout
