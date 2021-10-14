const TYPES = {
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export default function modalReducer (state = false, { type } ) {
  switch (type) {
    case TYPES.SHOW_MODAL:
      return state = true
    case TYPES.CLOSE_MODAL:
      return state = false
    default:
      return state
  }
}