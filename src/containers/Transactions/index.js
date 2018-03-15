import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Transactions from '../../screens/Transactions'
import moment from 'moment'

const makeid = () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const get_item_details = (orders) => {
  const newDetails = []
  orders.map((obj, i) => {
    const newObj = {
      "id":makeid(),
      "price":obj.price,
      "quantity": obj.totalPrice / obj.price,
      "name": obj.title
    }

    newDetails.push(newObj)
  })

  return newDetails
}

const mapStateToProps = state => {

  const { shipping, orderReducer, userReducer , addressReducer } = state
  //user
  const { email } = userReducer
  //address
  const addressSelected = addressReducer.filter(obj => obj.is_selected == true)
  const selectedAddress = addressSelected[0]
  const first_name = selectedAddress.as_name
  const phone = selectedAddress.phone_number
  //order
  let summaryOrder = 0
  const sumaryOfAllOrder = orderReducer.map(obj => {
    summaryOrder += obj.totalPrice
  })
  //shipping
  const { courier, serviceSelected } = shipping
  let splitWithUnderscore, service_name, estimation_date, service_cost, shippingService
  if (serviceSelected !== null) {
    splitWithUnderscore = serviceSelected.split("_")
    service_name = splitWithUnderscore[0]
    estimation_date = splitWithUnderscore[1]
    service_cost = splitWithUnderscore[2]
    shippingService = {
      service_name,
      estimation_date,
      service_cost
    }
  }

  const additionalServiceCost = serviceSelected == null || serviceSelected == '0' ? 0 : shippingService.service_cost
  const summary = Number(summaryOrder) + Number(additionalServiceCost)

  const dateString = moment().format('L');
  const removeSlice = dateString.replace("/", "");
  const removeSliceForLast = removeSlice.replace("/", "")
  // console.log(removeSliceForLast);
  // const order_id = toUpperCase()
  const payment_type = 'echannel'
  const transaction_details = {
    "gross_amount": summary,
    "order_id": makeid().toUpperCase()+removeSliceForLast
  }

  const customer_details = {
    email,
    first_name,
    last_name:' ',
    phone,
  }

  const item_details = get_item_details(orderReducer)

  const transactionDataToPayment = {
    payment_type,
    transaction_details,
    customer_details,
    item_details
  }
  // console.log({summaryOrder, additionalServiceCost});
  return {
    summary : summary,
    serviceSelected : serviceSelected == null || serviceSelected == '0' ? null : serviceSelected,
    shippingService,
    transactionDataToPayment
  }
}

const mapDispatchToProps = dispatch => ({
  addNewTransactionData : ({shippingService,transactionDataToPayment}) => {
      const shippingItem = {
        "id": makeid(),
        "price": Number(shippingService.service_cost),
        "quantity": 1,
        "name": shippingService.service_name
      }
      let newArray = []

      const {item_details} = transactionDataToPayment
      newArray = [...item_details]
      newArray.push(shippingItem)

      const newTransactionData = {
        ...transactionDataToPayment,
        item_details : newArray
      }

      console.log(newTransactionData);


    dispatch({type:'ADD_NEW_TRANSACTION_DATA', payload:newTransactionData})
    dispatch({type:'Navigation/NAVIGATE', routeName:'Payments'})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
