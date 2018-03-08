const initialState = false

const showTextModalEdit = ( state = initialState, action ) => {
  switch (action.type) {
    case 'SHOW_TEXT_MODAL_EDIT':
      return !state
      break;
    default:
      return state
  }
}

export default showTextModalEdit
