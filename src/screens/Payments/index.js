/* @flow */

import React, { Component } from 'react';
import {
  View,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import {Content, List, ListItem, Text, Left, Icon, Body, Right, Button } from 'native-base';

export default class Payments extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Payments`,
    headerLeft:(
      <Button
        onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
        style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </Button>)
  })

  onCheckoutPress = ({payment_type, bankName, storeName}) => {
    const params = {payment_type, bankName, storeName}
    const resetAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'TabHome' }),
        NavigationActions.navigate({
          routeName: 'TabHistory' ,
          action: NavigationActions.navigate({ routeName: 'TabH2' }),
        }),
        NavigationActions.navigate({ routeName: 'PaymentDetails',params }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>ATM / Virtual Account</Text>
            </ListItem>
            <ListItem icon onPress={()=>this.onCheckoutPress({payment_type: 'echannel', bankName:'mandiri'})}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-bank-mandiri.png')} />
              </Left>
              <Body>
                <Text>Mandiri Bill Payment</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>
            <ListItem icon onPress={()=>this.onCheckoutPress({payment_type: 'bank_transfer', bankName:'bca'})}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-bank-bca.png')} />
              </Left>
              <Body>
                <Text>BCA Bank Transfer</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
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
    backgroundColor: '#ffffff'
  },
});
