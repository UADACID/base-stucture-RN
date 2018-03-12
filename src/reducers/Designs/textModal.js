const initialState = false

const showTextModal = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_TEXT_MODAL':
      return !state
      break;
    case 'SET_DEFAULT_TEXT_MODAL':
      return initialState
      break;
    default:
      return state
  }
}

export default showTextModal
