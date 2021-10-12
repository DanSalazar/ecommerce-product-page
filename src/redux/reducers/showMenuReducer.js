const TYPES = {
  SHOW_MENU: 'SHOW_MENU',
  CLOSE_MENU: 'CLOSE_MENU'
}

export default function menuReducer (state = false, { type } ) {
  switch (type) {
    case TYPES.SHOW_MENU:
      return state = true
    case TYPES.CLOSE_MENU:
      return state = false
    default:
      return state
  }
}