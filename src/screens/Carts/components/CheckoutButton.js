/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'native-base'

const { width, height } = Dimensions.get('window')

const CheckoutButton = (props) => (
    <Button
      onPress={()=> props.dispatch({type:'Navigation/NAVIGATE', routeName:'Transactions'})}
      style={styles.button}>
      <ButtonLeft sumaryOfAllOrder={props.sumaryOfAllOrder}/>
      <ButtonRight />
    </Button>
);

const mapStateToProps = state => {
  let sumary = 0
  const sumaryOfAllOrder = state.orderReducer.map(obj => {
    sumary += obj.totalPrice
  })

  return {
    sumaryOfAllOrder: sumary
  }
}

export default connect(mapStateToProps)(CheckoutButton);

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
