import axios from 'axios'

// 创建轮播图活动接口
const instance = axios.create({
  timeout: 5000,
  baseURL:
    'https://www.fastmock.site/mock/ac9d664fc26b91d4b62fe215c19f93b3/study',
})

//  响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应做点什么
    return response.data
  }
  // (err) => {
  //   if (err.response) {
  //     Toast.info(err.response.data.message)
  //   } else {
  //     Toast.info('网络繁忙，请稍后重试')
  //   }
  //   return Promise.reject(err)
  // }
)
export default instance
