const initialState = false

export const categoryOverlay = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_CATEGORY_OVERLAY':
      return true
      break;
    case 'HIDE_CATEGORY_OVERLAY':
      return false
      break;
    default:
      return state
  }
}
