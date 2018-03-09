//
//
// export default ({ bankName, payment_type }) => {
//   const randomString = Math.random().toString(36).substring(7)
//     const object = {...defaultBody}
//     object.payment_type = payment_type
//     object.transaction_details.order_id = `order-${randomString}`
//     switch (bankName) {
//       case 'mandiri':
//
//         const echannel = {
//               "bill_info1" : "Payment For:",
//               "bill_info2" : "Food"
//             }
//         object.echannel = echannel
//         service(object)
//         break;
//       case 'bca':
//         object.bank_transfer = {"bank": bankName}
//         service(object)
//         break;
//       default:
//         return
//         break;
//     }
// }
//
// const service = (data) => {
//     axios({
//       method: 'post',
//       url: 'https://api.sandbox.midtrans.com/v2/charge',
//       auth: {
//           username: 'SB-Mid-server-ckiT9utUAoY0LmAVlyASljpy',
//           password: ''
//       },
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       },
//       data : data
//     })
//     .then(response => {
//       // this.props.dispatch({type:'HIDE_OVERLAY'})
//       console.log(response);
//       if (response.data.status_code == '201') {
//         ToastAndroid.show(response.data.status_message, ToastAndroid.SHORT);
//         this.onSuccessCreateTransaction(response.data)
//         return
//       }
//       this.props.onBackPress()
//       //navigate back
//     })
//     .catch(err => {
//       //navigate back
//       ToastAndroid.show(JSON.stringify(err.response), ToastAndroid.SHORT);
//       this.props.onBackPress
//       console.log(err);
//       console.log(err.response);
//     })
// }
