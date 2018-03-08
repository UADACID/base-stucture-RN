const initialState = true

export const connectivity = ( state= initialState, action ) => {

  switch (action.type) {
    case 'IS_CONNECTED':
      return action.payload
      break;
    default:
      return state
  }
}
