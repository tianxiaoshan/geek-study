import { SAVE_USER } from '../action_types/profile'

const initValue = {
  user: {},
}

// 处理个人信息的reducer
export default function reducer(state = initValue, action) {
  const { type, payload } = action
  if (type === SAVE_USER) {
    return {
      ...state,
      user: payload,
    }
  }
  return state
}
