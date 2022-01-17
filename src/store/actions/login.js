import request from '@/utils/request'
import { setTokenInfo } from '@/utils/storage'
export const sendCode = (mobile) => {
  return async () => {
    // 发送请求
    await request({
      url: `/sms/codes/${mobile}`,
      method: 'get',
    })
  }
}

// 保存 token
export const saveToken = (payload) => {
  return {
    type: 'login/token',
    payload,
  }
}

// 登录
export const login = (data) => {
  return async (dispatch) => {
    const res = await request({
      url: '/authorizations',
      method: 'post',
      data,
    })
    // 把token 保存到redux中
    dispatch(saveToken(res.data))
    setTokenInfo(res.data)
  }
}
