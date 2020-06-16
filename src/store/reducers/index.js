import { combineReducers } from 'redux'
import { userReducer } from '../../screens/user/redux'

export default combineReducers({
  user: userReducer
})