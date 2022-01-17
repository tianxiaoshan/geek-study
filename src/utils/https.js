import axios from 'axios'

// 创建轮播图活动接口
const instance = axios.create({
  timeout: 5000,
  baseURL:
    'https://www.fastmock.site/mock/ac9d664fc26b91d4b62fe215c19f93b3/study',
})

export default instance
