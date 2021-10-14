import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import menuReducer from './reducers/showMenuReducer.js'
import shoppingCartReducer from './reducers/shoppingCartReducer.js'
import modalReducer from './reducers/modalReducer.js'

const reducers = combineReducers({
  showMenu: menuReducer,
  cart: shoppingCartReducer,
  carouselModal: modalReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store

