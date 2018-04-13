import axios from 'axios'
import { ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default checkPaymentStatus = (dispatch, payment_id) => {
  console.log({payment_id});
  dispatch({type:'SHOW_OVERLAY'})
    axios({
      method: 'get',
      url: `https://api.sandbox.midtrans.com/v2/${payment_id}/status`,
      auth: {
          username: 'SB-Mid-server-ckiT9utUAoY0LmAVlyASljpy',
          password: ''
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(response => {
      dispatch({type:'HIDE_OVERLAY'})
      // this.props.dispatch({type:'HIDE_OVERLAY'})
      console.log(response);
      if (response.data.status_code == '201') {
        const transaction_status = response.data.transaction_status
        ToastAndroid.show(response.data.transaction_status, ToastAndroid.LONG);
        // disp// dispatch({type:'RESET_TRANSACTION_PAYMENT'})
        let routeName = 'Completed'
        if (transaction_status == "pending") {
          routeName = "Pending"
        }

        dispatch({type:'RESET_TRANSACTION_PAYMENT'})
        dispatch({type:'RESET_SHIPPING'})
        dispatch({type:'RESET_ORDER'})
        const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'TabHome' }),
            NavigationActions.navigate({
              routeName: 'TabHistory' ,
              action: NavigationActions.navigate({ routeName }),
            }),
          ],
        });
        dispatch(resetAction);

        return
      }
      dispatch({type:'RESET_TRANSACTION_PAYMENT'})
      dispatch({type:'RESET_SHIPPING'})
      dispatch({type:'RESET_ORDER'})
      // dispatch(NavigationActions.back());
      // this.props.onBackPress()
      //navigate back
    })
    .catch(err => {
      dispatch({type:'HIDE_OVERLAY'})
      //navigate back
      ToastAndroid.show(JSON.stringify(err), ToastAndroid.SHORT);
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'TabHome' }),
          NavigationActions.navigate({
            routeName: 'TabHistory' ,
            action: NavigationActions.navigate({ routeName: 'Pending' }),
          }),
        ],
      });
      dispatch(resetAction);
      dispatch({type:'RESET_TRANSACTION_PAYMENT'})
      dispatch({type:'RESET_SHIPPING'})
      dispatch({type:'RESET_ORDER'})
      // dispatch(NavigationActions.back());
      // this.props.onBackPress
      console.log(err);
      console.log(err.response);
    })
}
