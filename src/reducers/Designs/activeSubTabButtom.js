const initialState = 'textFont'

const activeSubTabButtom = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SUB_TAB_BOTTOM_SELECTED':
      return action.payload
      break;
    default:
      return state
  }
}

export default activeSubTabButtom
