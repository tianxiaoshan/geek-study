const activeInfo = {
  info: {},
}

// 处理活动信息的 reducer
export default function reducer(state = activeInfo, action) {
  const { type, payload } = action
  if (type === 'activity/info') {
    return {
      ...state,
      info: payload,
    }
  }
  return state
}
