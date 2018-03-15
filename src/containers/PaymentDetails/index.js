import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
//action
import transactionAdapter from '../../actions/PaymentDetails/transactionAdapter'
//service
import createPaymentTransaction from '../../services/PaymentDetails/createPaymentTransaction'
import checkPaymentStatus from '../../services/PaymentDetails/checkPaymentStatus'
import PaymentDetails from '../../screens/PaymentDetails'

const mapDispatchToProps = dispatch => ({
  onBackPress: () => {
    dispatch({type:'RESET_TRANSACTION_PAYMENT'})
    dispatch(NavigationActions.back());
  },
  resetTransactionPayment:() => dispatch({type:'RESET_TRANSACTION_PAYMENT'}),
  onCreateTransaction : ({ bankName, payment_type, transactionItem }) => {
    const payload = transactionAdapter({ bankName, payment_type, transactionItem })
    console.log(payload);
    createPaymentTransaction(payload, dispatch)
  },
  onConfirmationPress : (payment_id) => {
    checkPaymentStatus(dispatch, payment_id)
    // dispatch({type:'RESET_TRANSACTION_PAYMENT'})
    // const resetAction = NavigationActions.reset({
    //   index: 1,
    //   actions: [
    //     NavigationActions.navigate({ routeName: 'TabHome' }),
    //     NavigationActions.navigate({
    //       routeName: 'TabHistory' ,
    //       action: NavigationActions.navigate({ routeName: 'Completed' }),
    //     }),
    //   ],
    // });
    // dispatch(resetAction);
  }
})

const mapStateToProps = (state) => {
  return {
    paymentsReducer : state.paymentsReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails)
