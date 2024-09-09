import { Outlet } from 'react-router-dom'
import style from './index.module.scss'
import { useState, useEffect } from 'react'
import { Affix, Dropdown, Avatar } from 'antd'
import { useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'

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

  useEffect(() => {
    setIsActive(Number(localStorage.getItem('roco_layout_act') ?? -1))
  }, [])

  const location = useLocation()
  console.log(location.pathname)

  const items: MenuProps['items'] = [
    {
      label: '个人信息',
      key: '0',
    },
    {
      label: '退出登录',
      key: '1',
    },
  ]

  const handleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }

  return (
    <>
      <Affix offsetTop={0} className={style.ant_affix}>
        <div className={style.header}>
          <div className={style.header_body}>
            <div className={style.header_title}>
              <a href='#/layout/home' onClick={() => changeActive(-1)}>
                <img src='https://www.pokemon.cn/img/common/logo.png' alt='' />
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
              {/* <Dropdown menu={{ items }}>
                <a onClick={handleMenu}>
                  
                </a>
              </Dropdown> */}
              <Avatar size={64} icon={<UserOutlined />} />
            </div>
          </div>
        </div>
      </Affix>

      <div className={style.container}>
        <div className={style.container_content}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
