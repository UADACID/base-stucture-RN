import axios from 'axios'
import { ToastAndroid } from 'react-native';

export default createPaymentTransaction = (data, dispatch) => {
    axios({
      method: 'post',
      url: 'https://api.sandbox.midtrans.com/v2/charge',
      auth: {
          username: 'SB-Mid-server-ckiT9utUAoY0LmAVlyASljpy',
          password: ''
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data : data
    })
    .then(response => {
      // this.props.dispatch({type:'HIDE_OVERLAY'})
      console.log(response);
      if (response.data.status_code == '201') {
        ToastAndroid.show(response.data.status_message, ToastAndroid.SHORT);
        dispatch({type:'ADD_NEW_TRANSACTION_PAYMENT', payload:response.data})

        //remove after conditional
        // setTimeout(() => {
        //   dispatch({type:'RESET_TRANSACTION_PAYMENT'})
        // }, 3000);
        // this.onSuccessCreateTransaction(response.data)
        return
      }
      dispatch({type:'RESET_TRANSACTION_PAYMENT'})
      dispatch(NavigationActions.back());
      // this.props.onBackPress()
      //navigate back
    })
    .catch(err => {
      //navigate back
      ToastAndroid.show(JSON.stringify(err.response), ToastAndroid.SHORT);
      dispatch({type:'RESET_TRANSACTION_PAYMENT'})
      dispatch(NavigationActions.back());
      // this.props.onBackPress
      console.log(err);
      console.log(err.response);
    })
}
