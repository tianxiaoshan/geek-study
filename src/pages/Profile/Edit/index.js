import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar'
import { List, DatePicker, Drawer } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '@/store/actions/profile'
import classNames from 'classnames'
const { Item } = List

const sex = {
  0: '男',
  1: '女',
}
export default function ProfileEdit() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  // 获取redux中的profile数据
  const profile = useSelector((state) => state.profile.profile)
  console.log(profile, 11111)
  return (
    <div className={styles.root}>
      <div className="content">
        <NavBar>个人信息</NavBar>
        <div className="wrapper">
          <List className="profile-list">
            <Item
              arrow="horizontal"
              onClick={() => {}}
              extra={
                <span className="avatar-wrapper">
                  {' '}
                  <img src={profile.photo} alt="" />{' '}
                </span>
              }
            >
              头像
            </Item>
            <Item
              arrow="horizontal"
              extra={profile.name}
              onClick={() => {
                setOpen(true)
              }}
            >
              昵称
            </Item>
            <Item
              arrow="horizontal"
              extra={
                <span
                  className={classNames('intro', profile.intro && 'normal')}
                >
                  {profile.intro || '未填写'}
                </span>
              }
              onClick={() => {}}
            >
              简介
            </Item>
          </List>
          <List className="prfile-list">
            <Item
              extra={sex[profile.gender]}
              arrow="horizontal"
              onClick={() => {}}
            >
              性别
            </Item>
            <DatePicker
              mode="date"
              title="选择生日"
              // extra="Optional"
              value={new Date()}
              onChange={() => {}}
              minDate={new Date('1990-01-01')}
              maxDate={new Date()}
            >
              {/* <List.Item arrow="horizontal">Date</List.Item> */}
              <Item arrow="horizontal" extra={profile.birthday}>
                生日
              </Item>
            </DatePicker>
          </List>
        </div>
        <div className="logout">
          <button className="btn">退出登录</button>
        </div>
      </div>
      {/* 抽屉组件  */}

      <Drawer
        className="drawer"
        sidebar={
          <div
            style={{
              minHeight: document.documentElement.clientHeight,
              backgroundColor: '#fff',
            }}
          >
            抽屉的内容
          </div>
        }
        open={open}
      >
        {''}
      </Drawer>
    </div>
  )
}
