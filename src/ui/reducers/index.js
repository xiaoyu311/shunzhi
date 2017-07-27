import errorReducer from './Error/error'
import accountReducer from './account/accountReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  stateErr:errorReducer,
  account:accountReducer
})
export default rootReducer
