import https from '@/utils/https'

// 保存用户活动信息到redux里面
export const saveactivityUserInfo = (payload) => {
  console.log('active/userinfo', payload)
  return {
    type: 'active/userinfo',
    payload,
  }
}
// 获取用户活动信息
export const activityUserInfo = (params) => {
  return async (dispatch) => {
    const res = await https({
      url: '/user/info',
      method: 'get',
      params: { params },
    })
    dispatch(saveactivityUserInfo(res.data))
    console.log('activityUserInfo', res.data)
  }
}
