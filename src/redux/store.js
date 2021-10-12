import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import menuReducer from './reducers/showMenuReducer.js'

const reducers = combineReducers({
  showMenu: menuReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store

