import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import menuReducer from './reducers/showMenuReducer.js'
import shoppingCartReducer from './reducers/shoppingCartReducer.js'

const reducers = combineReducers({
  showMenu: menuReducer,
  cart: shoppingCartReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store

