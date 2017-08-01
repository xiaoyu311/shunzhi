import errorReducer from './Error/error'
import accountReducer from './account/accountReducer'
import dishReducer from './dishReducer/dishReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  stateErr:errorReducer,
  account:accountReducer,
  dishReducer:dishReducer
})
export default rootReducer
