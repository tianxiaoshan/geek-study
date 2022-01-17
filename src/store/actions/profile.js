import request from '@/utils/request'
import { SAVE_USER } from '../action_types/profile'

// 保存用户信息
export const saveUser = (payload) => {
  return {
    type: SAVE_USER,
    payload,
  }
}

// 获取用户信息
export const getUser = () => {
  return async (dispatch) => {
    const res = await request.get('/user')
    dispatch(saveUser(res.data))
  }
}
