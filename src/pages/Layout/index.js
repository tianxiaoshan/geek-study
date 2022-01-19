import React, { useEffect } from 'react'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
// import { Route, Routes, Switch } from 'react-router-dom'
// import Home from '@/pages/Home'
// import Qa from '@/pages/QA'
// import Video from '@/pages/Video'
// import Profile from '@/pages/Profile'
// import Home from '@/pages/Home'
// import Qa from '@/pages/QA'
// import Profile from '@/pages/Profile'
// import Video from '@/pages/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '@/store/actions/profile'
import { activityInfo } from '@/store/actions/active'
import { activityUserInfo } from '@/store/actions/activeuser'
import { prizesList } from '@/store/actions/prizeslist'

const Qa = React.lazy(() => import('@/pages/QA'))
const Home = React.lazy(() => import('@/pages/Home'))
const Profile = React.lazy(() => import('@/pages/Profile'))
const Video = React.lazy(() => import('@/pages/Video'))

const tabBar = [
  {
    title: '首页',
    icon: 'iconbtn_home',
    path: '/home',
  },
  {
    title: '问答',
    icon: 'iconbtn_qa',
    path: '/home/qa',
  },
  {
    title: '视频',
    icon: 'iconbtn_video',
    path: '/home/video',
  },
  {
    title: '我的',
    icon: 'iconbtn_mine',
    path: '/home/profile',
  },
]
export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
    dispatch(activityInfo({ activityCode: 'ptRescue' }))
  }, [dispatch])
  const Info = useSelector((state) => state.active.info)
  // console.log('activeinfo', Info)

  const { nickName, phone, userName, userId, realName } = window._userInfo || {}
  useEffect(() => {
    dispatch(
      activityUserInfo({
        nickName,
        phone,
        userName,
        realName,
        thirdUserCode: userId,
        id: Info.projectId,
      })
    )
    dispatch(
      prizesList({ projectId: Info.projectId, activityId: Info.activityId })
    )
  }, [Info])
  return (
    <div className={styles.root}>
      {/* 区域一：点击按钮切换显示内容的区域 */}
      <div className="tab-content">
        {/* <React.Suspense fallback={<div>loading.....</div>}> */}
        <Routes>
          <Route index path="/" exact element={<Home />}></Route>
          <Route index path="qa" element={<Qa />}></Route>
          <Route index path="video" element={<Video />}></Route>
          <Route index path="profile" element={<Profile />}></Route>
        </Routes>

        {/* </React.Suspense> */}
      </div>
      {/* 区域二：按钮区域，会使用固定定位显示在页面底部 */}
      <div className="tabbar">
        {tabBar.map((item) => (
          <div
            className={classNames(
              'tabbar-item',
              location.pathname === item.path ? 'tabbar-item-active' : ''
            )}
            key={item.title}
            onClick={() => navigate(item.path)}
          >
            <Icon
              type={
                location.pathname === item.path ? item.icon + '_sel' : item.icon
              }
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
