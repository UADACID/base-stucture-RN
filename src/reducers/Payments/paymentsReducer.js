const initialState = {
  success : false,
  response : null,
  data : null
}

const paymentsReducer = ( state = initialState , action ) => {
  switch (action.type) {
    case "ADD_NEW_TRANSACTION_PAYMENT":
      const newState = {
        ...state,
        success:true,
        response:action.payload}
      return newState
      break;
    case "ADD_NEW_TRANSACTION_DATA":{
      const newState = {
        ...state,
        data:action.payload
      }
      return newState
    }
      break;
    case "RESET_TRANSACTION_PAYMENT":
      return initialState
      break;
    default:
      return state
  }
}

export default paymentsReducer
