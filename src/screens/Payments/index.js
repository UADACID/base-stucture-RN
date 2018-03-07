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

  onCheckoutPress = () => {
    const resetAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'TabHome' }),
        NavigationActions.navigate({
          routeName: 'TabHistory' ,
          action: NavigationActions.navigate({ routeName: 'TabH2' }),
        }),
        NavigationActions.navigate({ routeName: 'PaymentDetails' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text  onPress={this.onCheckoutPress}>I'm the Payments component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6'
  },
});
