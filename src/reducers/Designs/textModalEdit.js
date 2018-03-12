const initialState = false

const showTextModalEdit = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_TEXT_MODAL_EDIT':
      return !state
      break;
    case 'SET_DEFAULT_SHOW_TEXT_MODAL_EDIT':
      return initialState
      break;
    default:
      return state
  }
}

export default showTextModalEdit
