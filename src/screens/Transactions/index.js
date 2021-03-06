/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon, Button, Content, List, ListItem, Body, Left, Right } from 'native-base'
import Address from './components/Address'
import DefaultAddress from './components/DefaultAddress'
import CartList from './components/CartList'
import Courier from './components/Courier'

const { width, height } = Dimensions.get('window')

export default class Transactions extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Shipping`,
    headerLeft:(
      <Button
        onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
        style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </Button>)
  })

  onPressPayment = () => {
    const { serviceSelected, addNewTransactionData, shippingService, transactionDataToPayment } = this.props
    if (serviceSelected == undefined || serviceSelected == null) {
      return Alert.alert('','Mohon pilih kurir dan service yang diinginkan')
    }
    // alert('boleh')
    // console.log({shippingService,transactionDataToPayment});
    addNewTransactionData({shippingService,transactionDataToPayment})
    // this.props.navigation.navigate('Payments')
  }

  render() {
    return (
      <View style={styles.container}>
        <Content>
          <List>
            <ListItem style={{marginLeft:0}}>
              <View style={styles.addressHeader}>
                <Text style={styles.addressTitle}>Kemana pesananmu dikirimkan ?</Text>
              </View>
            </ListItem>
            <ListItem style={{marginLeft:0, backgroundColor:'#fff'}}>
              <DefaultAddress />
            </ListItem>
            <ListItem
              onPress={()=> this.props.navigation.navigate('ListAddress')}
              style={{marginLeft:0, padding: 20, backgroundColor:'#fff'}}>
              <Body>
                <Text>Kirim ke alamat lain</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" style={{color:'#59abe3'}}/>
              </Right>
            </ListItem>
            <ListItem style={{marginLeft:0, padding: 20, backgroundColor:'#fff'}}>
              <Courier />
            </ListItem>
            <ListItem style={{marginLeft:0}}>
              <View style={styles.addressHeader}>
                <Text style={styles.addressTitle}>Benarkah ini pesananmu ?</Text>
              </View>
            </ListItem>
            <ListItem style={{marginLeft:0}}>
              <View>
                <CartList />
              </View>
            </ListItem>
            <ListItem style={{marginLeft:0, backgroundColor:'#fff'}}>
              <View style={{flexDirection:'row', justifyContent:'space-around', flex:1}}>
                <Text style={{fontSize:25}}>Total</Text>
                <Text style={{fontSize:25, color:'green'}}>Rp. {this.props.summary}</Text>
              </View>
            </ListItem>
            <ListItem style={{marginLeft:0}}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPressPayment}>
                <Text style={{fontWeight:'100', fontSize:20, color:'#fff'}}>PAYMENT</Text>
              </TouchableOpacity>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressHeader : {
    padding: 20
  },
  addressTitle : {
    fontSize: 20,
    fontWeight: '100'
  },
  button : {
    width: width - 40,
    marginLeft: 20,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0073b2'
  },
});
