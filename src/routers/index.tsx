import { useRoutes, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import lazyLoad from './lazyLoad'
import Layout from '@/pages/layout'
import Login from '@/pages/login'
import NotFound from '@/pages/404/inedx'

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}

const router_item = [
  { path: '/', label: '首页', element: <Navigate to='/layout/home' /> },
  { path: '/login', label: 'login', element: <Login /> },
  {
    path: '/layout',
    label: 'layout',
    element: <Layout />,
    children: [
      {
        path: 'home',
        label: 'home',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/home')))),
      },
      {
        path: 'news',
        label: 'news',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/news')))),
      },
      {
        path: 'notice',
        label: 'notice',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/notice')))),
      },
      {
        path: 'handbook',
        label: 'handbook',
        element: lazyLoad(lazy(() => delayForDemo(import('@/pages/handbook')))),
      },
    ],
  },
  { path: '/404', label: '404', element: <NotFound /> },
  { path: '*', label: '404', element: <Navigate to='/404' /> },
]

function Routers() {
  const routes = useRoutes(router_item)
  return routes
}

export default Routers
