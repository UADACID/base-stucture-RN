const initialState = false

const showTextModal = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_TEXT_MODAL':
      return !state
      break;
    default:
      return state
  }
}

export default showTextModal
