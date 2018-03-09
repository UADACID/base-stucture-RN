const initialState = {
  success : false,
  data : null
}

const paymentsReducer = ( state = initialState , action ) => {
  switch (action.type) {
    case "ADD_NEW_TRANSACTION_PAYMENT":
      const newState = {success:true, data:action.payload}
      return newState
      break;
    case "RESET_TRANSACTION_PAYMENT":
      return initialState
      break;
    default:
      return state
  }
}

export default paymentsReducer
