import errorReducer from './Error/error'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  error:errorReducer
})
export default rootReducer
