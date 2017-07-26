import { createStore } from 'redux'
import rootReducer from './ui/reducers/index'

const store = createStore(rootReducer)

export default store
