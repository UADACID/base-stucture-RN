const initialState = false

export const modalOverlay = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_OVERLAY':
      return true
      break;
    case 'HIDE_OVERLAY':
      return false
      break;
    default:
      return state
  }
}
