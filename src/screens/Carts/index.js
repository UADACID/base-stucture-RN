/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { Icon, Button, Footer } from 'native-base'
import { NavigationActions } from 'react-navigation'

import CartList from './components/CartList'
import CheckoutButton from './components/CheckoutButton'
import { AppColor, width, height } from '../../utils'
import CustomNavbar from '../../components/CustomNavbar'

export default class Carts extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Carts`,
    headerLeft:(
      <TouchableNativeFeedback onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}>
      <View
        style={{height:55, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </View>
      </TouchableNativeFeedback>)
  })

  render() {
    return (
      <View style={styles.container}>
        {/*<Text  onPress={()=> this.props.navigation.navigate('Transactions')}>I'm the Carts component</Text>*/}
        <CartList />
        <Footer style={styles.footer}>
          <CheckoutButton/>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  footer: {
    height: 50,
  }
});
