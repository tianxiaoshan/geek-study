import https from '@/utils/https'

// 第三方绑定关系接口
export const getSyncData = (data) => {
  return async (dispatch) => {
    const res = await https({
      url: '/third-party/sync',
      mothed: 'post',
      data,
    })
    console.log(res.data)
  }
}
