import login from './login'
import profile from './profile'
import active from './active'
import activeuser from './activeuser'
import prizeslist from './prizeslist'
const { combineReducers } = require('redux')

const reducer = combineReducers({
  login,
  profile,
  active,
  activeuser,
  prizeslist,
})

export default reducer
