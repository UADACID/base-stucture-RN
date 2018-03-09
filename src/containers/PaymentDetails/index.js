import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
//action
import transactionAdapter from '../../actions/PaymentDetails/transactionAdapter'
//service
import createPaymentTransaction from '../../services/PaymentDetails/createPaymentTransaction'
import PaymentDetails from '../../screens/PaymentDetails'

const mapDispatchToProps = dispatch => ({
  onBackPress: () => {
    dispatch({type:'RESET_TRANSACTION_PAYMENT'})
    dispatch(NavigationActions.back());
  },
  resetTransactionPayment:() => dispatch({type:'RESET_TRANSACTION_PAYMENT'}),
  onCreateTransaction : ({ bankName, payment_type }) => {
    const payload = transactionAdapter({ bankName, payment_type })
    createPaymentTransaction(payload, dispatch)
  },
  onConfirmationPress : () => {
    dispatch({type:'RESET_TRANSACTION_PAYMENT'})
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabHome' }),
        NavigationActions.navigate({
          routeName: 'TabHistory' ,
          action: NavigationActions.navigate({ routeName: 'Completed' }),
        }),
      ],
    });
    dispatch(resetAction);
  }
})

const mapStateToProps = (state) => {
  return {
    paymentsReducer : state.paymentsReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails)
