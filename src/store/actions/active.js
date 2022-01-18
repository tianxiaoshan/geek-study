import https from '@/utils/https'

// 保存活动信息
export const saveActivityInfo = (payload) => {
  return {
    type: 'activity/info',
    payload,
  }
}

// 获取活动信息
export const activityInfo = (params) => {
  return async (dispatch) => {
    const res = await https.get('/activity/info', { params })
    dispatch(saveActivityInfo(res.data))
    // console.log(res.data)
  }
}
