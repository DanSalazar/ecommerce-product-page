const TYPES = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_ALL_PRODUCTS: 'DELETE_ALL_PRODUCTS'
}

const initialState = {
  quantity: 0,
  productName: '',
  price: 0,
}

export default function shoppingCartReducer (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.ADD_PRODUCT:
      return {...state, ...payload, quantity: state.quantity + payload.quantity}
    case TYPES.DELETE_ALL_PRODUCTS:
      return initialState
    default:
      return state
  }
}

