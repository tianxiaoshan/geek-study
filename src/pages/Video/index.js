import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

const Video = () => {
  const Info = useSelector((state) => state.active.info.data)
  console.log('info', Info)

  return (
    <div className={styles.root}>
      <div className="btn"> 立即领取1元现金红包</div>
      <Swiper
        className="swiper"
        // modules={[Autoplay]}
        spaceBetween={-25}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop
        // centeredSlides
        // autoplay
      >
        <SwiperSlide>
          <div className="open">开</div>
          <div className="money">支付宝1元现金抵用劵</div>
          <div className="time">活动截止日期XXXX</div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 22222222222</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Video
// export default connect(({ active }) => ({
//   activityInfo: active.activityInfo,
// }))(memo(Video))
