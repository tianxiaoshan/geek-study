// 处理保存活动用户信息的 reducer
const activeUser = {
  activeuserinfo: {},
}

export default function reducer(state = activeUser, action) {
  const { type, payload } = action
  if (type === 'activeuser/active') {
    return {
      ...state,
      activeuserinfo: payload,
    }
  }
  return state
}
