export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export const deleteAllProducts = () => {
  return {
    type: 'DELETE_ALL_PRODUCTS'
  }
}
