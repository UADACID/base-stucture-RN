const initialState = false

export const startupInfo = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_STARTUP_INFO_OVERLAY':
      return true
      break;
    case 'HIDE_STARTUP_INFO_OVERLAY':
      return false
      break;
    default:
      return state
  }
}
