/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class Splash extends Component {

  componentDidMount(){
    // setTimeout(()=>{
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'TabHome' ,
            action : NavigationActions.navigate({ routeName:'NotificationTab' })
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    // }, 100);
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator />
        <Text> waiting for redirect . . . </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
