import https from '@/utils/https'

// 把奖品列表保存到redux
export const saveDrizesList = (payload) => {
  return {
    type: 'active/prizes',
    payload,
  }
}

// 奖品列表信息
export const prizesList = (params) => {
  return async (dispathch) => {
    const res = await https({
      url: '/prizes',
      method: 'get',
      params,
    })
    dispathch(saveDrizesList(res.data))
    console.log(res.data)
  }
}
