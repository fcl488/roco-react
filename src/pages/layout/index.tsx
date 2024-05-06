import { Outlet } from "react-router-dom"
import './index.scss'

const Layout = () => {
    return (
        <>
            <div className="header">
                <div className="header-body">
                    <div className="header-title">
                        <img src="https://www.pokemon.cn/img/common/logo.png" alt="" />
                    </div>
                    <div className="nav">
                        <div className="nav-body">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <a href="#" className="nav-item_notice">
                                        <span>站内公告</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-item_library">
                                        <span>洛克图鉴</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-item_news">
                                        <span>新闻公告</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Layout
