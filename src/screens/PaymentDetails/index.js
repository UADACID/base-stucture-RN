/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { Icon, Button } from 'native-base'
import { NavigationActions } from 'react-navigation'

export default class PaymentDetails extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Payment Details`,
    headerLeft:(
      <Button
        onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
        style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </Button>)
  })

  onConfirmationPress = () => {
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabHome' }),
        NavigationActions.navigate({
          routeName: 'TabHistory' ,
          action: NavigationActions.navigate({ routeName: 'TabH2' }),
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onConfirmationPress}>I'm the PaymentDetails component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
