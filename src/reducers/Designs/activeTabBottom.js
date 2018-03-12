const initialState = 'color'

const activeTabBottom = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB_BOTTOM_SELECTED': {
        return action.payload
      }
      break;
    case 'SET_DEFAULT_TAB_BOTTOM_SELECTED': {
        return initialState
      }
      break;
    default:
      return state
  }
}

export default activeTabBottom
