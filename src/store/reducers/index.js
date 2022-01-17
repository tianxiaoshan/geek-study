import login from './login'
import profile from './profile'
import active from './active'
const { combineReducers } = require('redux')

const reducer = combineReducers({
  login,
  profile,
  active,
})

export default reducer
