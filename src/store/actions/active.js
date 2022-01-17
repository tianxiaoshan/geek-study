import https from '@/utils/https'

// 保存活动信息
export const saveActivityInfo = (payload) => {
  console.log(payload, 2222)
  return {
    type: 'activity/info',
    payload,
  }
}

// 获取活动信息
export const activityInfo = () => {
  return async (dispatch) => {
    const res = await https.get('/activity/info')
    dispatch(saveActivityInfo(res.data))
    console.log(res.data)
  }
}
