import {
  useRoutes,
  Navigate,
  NavigateFunction,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import { ReactNode, lazy, useEffect, useState } from 'react'
import lazyLoad from './lazyLoad'
import Layout from '@/pages/layout'
import Login from '@/pages/login'
import NotFound from '@/pages/404/inedx'
import Register from '@/pages/register'
import { getToken } from '@/utils/token'

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    resolve(1)
  }).then(() => promise)
}

interface Route {
  path: string
  label: string
  element: ReactNode
  children?: Route[]
  auth?: boolean
}

export const router_item: Route[] = [
  { path: '/', label: '首页', element: <Navigate to='/login' />, auth: false },
  { path: '/login', label: 'login', element: <Login />, auth: false },
  { path: '/register', label: 'register', element: <Register />, auth: false },
  {
    path: '/layout',
    label: 'layout',
    element: <Layout />,
    children: [
      {
        path: 'home',
        label: 'home',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/home')))),
        auth: true,
      },
      {
        path: 'news',
        label: 'news',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/news')))),
        auth: true,
      },
      {
        path: 'notice',
        label: 'notice',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/notice')))),
        auth: true,
      },
      {
        path: 'handbook',
        label: 'handbook',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/handbook')))),
        auth: true,
      },
      {
        path: 'handbookInfo',
        label: 'handbookInfo',
        element: lazyLoad(
          lazy(() => delayForDemo(import('@/pages/handbookInfo')))
        ),
        auth: true,
      },
      {
        path: 'noticeInfo',
        label: 'noticeInfo',
        element: lazyLoad(
          lazy(() => delayForDemo(import('@/pages/notice/info')))
        ),
        auth: true,
      },
      {
        path: 'userInfo',
        label: 'userInfo',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/userInfo')))),
        auth: true,
      },
    ],
  },
  { path: '/404', label: '404', element: <NotFound />, auth: false },
  { path: '*', label: '404', element: <Navigate to='/404' />, auth: false },
]

function Routers() {
  const routes = useRoutes(router_item)
  return routes
}

function searchroutedetail(path: string, routes: Route[]): Route | null {
  for (let item of routes) {
    if (item.path === path) return item
    if (item.children) {
      return searchroutedetail(path, item.children)
    }
  }
  return null
}

//全局路由守卫
function guard(
  location: any, //类型在react-router-dom中导入
  navigate: NavigateFunction, //类型在react-router-dom中导入
  routes: Route[]
) {
  const { pathname } = location

  //找到对应的路由信息，判断有没有权限控制
  const routedetail = searchroutedetail(pathname, routes)
  //没有找到路由，跳转404
  if (!routedetail) {
    return false
  }
  //如果需要权限验证
  if (routedetail.auth) {
    if (!getToken()) {
      navigate(-1)
      return false
    }
  }
  return true
}

export const RouterGurad = (routes: Route[]) => {
  const location = useLocation()
  const navigate = useNavigate()
  let [bo, setBo] = useState(false)
  // let bo = guard(location, navigate, routes);
  useEffect(() => {
    return setBo(guard(location, navigate, routes))
  }, [location, navigate, routes])
  const Route = useRoutes(routes)

  return bo ? Route : null
}

export default Routers
