import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Toast } from 'antd-mobile'
import { Autoplay } from 'swiper'
import { getSyncData } from '@/store/actions/syncdata'

// import 'antd-mobile/es/global'
// import Popup from 'antd-mobile/es/components/popup'
// import { Popup } from 'antd-mobile'

import moment from 'moment'
import 'swiper/css'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'

const way = {
  alipay: '支付宝',
  wechat: '微信',
}
const text = {
  coupon: '优惠劵',
  redPackage: '红包',
  aliPoint: '支付宝集分宝',
}
const syncObj = {
  alipay: 0,
  wechat: 0,
}
const Video = () => {
  const [index, setindex] = useState(0)
  const dispatch = useDispatch()
  // const [visible, setVisible] = useState(false)
  const list = useSelector((state) => state.prizeslist.list)
  // console.log(list)
  const onSlideChange = (item) => {
    setindex(item.realIndex)
  }
  const onHandCilck = async (item, i) => {
    if (i !== index) {
      return
    }
    const uInfo = window._userInfo || {}
    const { login } = uInfo
    if (!login || login === 0) {
      Toast.info('请登录')
      return
    }

    if (!uInfo[item.payerType]) {
      Toast.info(`请绑定${way[item.payerType]}`)
      if (!syncObj[item.payerType]) {
        await dispatch(
          getSyncData({
            bindStatus: null,
            cpType: item.payerType,
            cpUserId: null,
            cpUserIdType: null,
            muserld: null,
            projectid: null,
          })
        )
      }
      return
    }
    try {
      if (!syncObj[item.payerType]) {
        await dispatch(
          getSyncData({
            payerType: item.payerType,
          })
        )
        syncObj[item.payerType] = 1
      }
    } catch (error) {
      console.log('error', error)
    }
    alert('哈哈哈哈')
    // setVisible(true)
  }
  return (
    <>
      <div className={styles.root}>
        <div className="btn">
          立即领取{list[index] && list[index].prizeAmount}元
          {list[index] && text[list[index].prizeType]}
        </div>
        <Swiper
          className="swiper"
          // modules={[Autoplay]}
          spaceBetween={-25}
          slidesPerView={1}
          onSlideChange={onSlideChange}
          // onSwiper={(swiper) => console.log(swiper)}
          // loop
          // centeredSlides
          // autoplay
        >
          {list.map((item, i) => (
            <SwiperSlide key={item.prizeId}>
              <div
                className="open"
                onClick={() => {
                  onHandCilck(item, i)
                }}
              >
                开
              </div>
              <div className="money">
                {way[item.payerType]}
                {item.prizeAmount}元现金抵用劵
              </div>
              <div className="time">
                活动截止日期
                {item.endTime && moment(item.endTime).format('YYYY.MM.DD')}
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>Slide 22222222222</SwiperSlide> */}
        </Swiper>
      </div>
      {/* <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        bodyStyle={{ minHeight: '40vh' }}
      >
        Hello
      </Popup> */}
    </>
  )
}

export default Video
// export default connect(({ active }) => ({
//   activityInfo: active.activityInfo,
// }))(memo(Video))
