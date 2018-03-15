/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'native-base'


const { width, height } = Dimensions.get('window')

class CheckoutButton extends Component {

  onPresCheckout = () => {
    this.props.onPresCheckout(this.props.orderReducer)
    // this.props.dispatch({type:'Navigation/NAVIGATE', routeName:'Transactions'})
  }

  render(){

    if (this.props.orderReducer.length == 0) {
      return (
        <Button
          style={styles.button}>
        </Button>
      )
    }
    return (
      <Button
        onPress={this.onPresCheckout}
        style={styles.button}>
        <ButtonLeft sumaryOfAllOrder={this.props.sumaryOfAllOrder}/>
        <ButtonRight />
      </Button>
    )
  }
}


const mapStateToProps = state => {
  const { orderReducer } = state
  let sumary = 0
  const sumaryOfAllOrder = orderReducer.map(obj => {
    sumary += obj.totalPrice
  })

  return {
    sumaryOfAllOrder: sumary,
    orderReducer
  }
}

const mapDispatchToProps = dispatch => ({
  onPresCheckout:(orderReducer)=> {
    console.log(orderReducer);
    if (orderReducer.length == 0 ) {
      return ToastAndroid.show('Keranjang belanja masih kosong', ToastAndroid.SHORT);
    }

    for (var i = 0; i < orderReducer.length; i++) {

      if (orderReducer[i].totalPrice == 0) {
        return ToastAndroid.show('Lengkapi size pesanan anda', ToastAndroid.SHORT);
      }

    }


    dispatch({type:'Navigation/NAVIGATE', routeName:'Transactions'})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutButton);

const ButtonLeft = (props) => {
  return (
    <View style={{flex:1,paddingLeft:20, paddingRight:20, alignItems:'flex-end'}}>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Rp {props.sumaryOfAllOrder}</Text>
    </View>
  )
}

const ButtonRight = () => {
  return (
    <View style={{flex:-1, paddingLeft:20, paddingRight:20}}>
      <View style={{height:20, width:100, right:-20, position:'absolute', backgroundColor:'#fff', transform:[{rotate:'40deg'}, {scale:5}]}}>
      </View>
      <Text style={{color:'#59abe3', fontWeight:'bold'}}>CHECKOUT</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button : {
    flex:1,
    position: 'absolute',
    width: width,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom:0,
    backgroundColor: '#dae9ef'
  },
});
