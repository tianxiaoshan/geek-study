// 处理保存奖品列表信息的 reducer
const List = {
  list: [],
}

export default function reducer(state = List, action) {
  const { type, payload } = action
  if (type === 'active/prizes') {
    return {
      ...state,
      list: payload,
    }
  }
  return state
}
