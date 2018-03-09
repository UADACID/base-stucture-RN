/* @flow */

import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid
} from 'react-native';
import { Button, Footer, Content, Card, Text, Icon } from 'native-base'
import axios from 'axios'
import { NavigationActions } from 'react-navigation'


import AddOnBcaTransfer from './components/addOnBcaTransfer'
import AddOnMandiriBill from './components/addOnMandiriBill'

export default class PaymentDetails extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const func = () => alert('not yet');
    const onBackPress = params.onBackPress || func
    return {
      title: `Payment Details`,
      headerLeft:(
        <Button
          onPress={onBackPress}
          style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
          <Icon name='ios-arrow-back' style={{color:'#000'}}/>
        </Button>)
    }
  }

  componentWillMount() {
    this.props.resetTransactionPayment()
    this.props.navigation.setParams({ onBackPress: this.props.onBackPress });
  }

  componentDidMount(){
    const { bankName, payment_type } = this.props.navigation.state.params
    this.props.onCreateTransaction({ bankName, payment_type })
  }

  render() {
    const { bankName, payment_type } = this.props.navigation.state.params
    const { data } = this.props.paymentsReducer

    if (!this.props.paymentsReducer.success && this.props.paymentsReducer.data == null ) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
          </View>
        )
    }

    const { gross_amount, order_id, status_message, transaction_id, transaction_status, transaction_time} = data
    return (
      <View style={styles.container}>
        <Content>
          {bankName == 'mandiri' ? <AddOnMandiriBill data={data}/> : <AddOnBcaTransfer data={data}/> }
          <Card style={styles.cardContainer}>
            <CustomItem title='Order Id' desc={order_id}/>
            <CustomItem title='Message' desc={status_message}/>
            <CustomItem title='Transaction Status' desc={transaction_status}/>
            <CustomItem title='Date' desc={transaction_time}/>
            <CustomItem title='Total Amount' desc={gross_amount}/>
          </Card>
        </Content>
        <Footer style={{height:50}}>
          <Button style={styles.confirmationButton} onPress={this.props.onConfirmationPress}>
            <Text style={{color:'#000'}}>CONFIRMATION</Text>
          </Button>
        </Footer>
      </View>
    );
  }
}

const CustomItem = (props) => {
  return (
    <View style={{flex:1, borderBottomWidth:0.5, borderColor:'#b6b6b6'}}>
      <View style={{padding:10}}>
        <Text>
          {props.title}
        </Text>
      </View>
      <View style={{paddingRight:10, paddingBottom:10, alignItems:'flex-end'}}>
        <Text note>
          {props.desc}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10
  },
  loadingContainer: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center'
  },
  confirmationButton : {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#dae9ef'
  },
  cardContainer:{
    paddingLeft:0,
    paddingTop:0,
    paddingBottom:0,
    paddingRight:0,
  }
});

const defaultBody = {
    "payment_type": "echannel",
    "transaction_details": {
        "gross_amount": 99000,
        "order_id": "order-101dns"
    },
    "customer_details": {
        "email": "test@Midtrans.com",
        "first_name": "budi",
        "last_name": "utomo",
        "phone": "+6281 1234 1234"
    },
    "item_details": [
          {
             "id": "item01",
             "price": 50000,
             "quantity": 1,
             "name": "Ayam Zozozo"
          },
          {
             "id": "item02",
             "price": 49000,
             "quantity": 1,
             "name": "Ayam Xoxoxo"
          }
         ],
}
