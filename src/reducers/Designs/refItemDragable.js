const initialState = []

const refItemDragable = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ON_CHANGE_REFS':
      let newArray = state.concat(action.payload)
      let uniqArray = [ ...new Set(newArray) ]
      return uniqArray
      break;
    default:
      return state
  }
}

export default refItemDragable
