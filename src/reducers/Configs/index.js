const initialState = {
  showInfoStartup : true
}

export const configReducers = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ON_CHANGE_SHOW_INFO_STARTUP':
      return {
        ...state,
        showInfoStartup:!state.showInfoStartup
      }
      break;
    default:
      return state
  }
}
