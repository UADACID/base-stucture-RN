/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { Icon, Button } from 'native-base'
import { NavigationActions } from 'react-navigation'

export default class Previews extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Previews`,
    headerLeft:(
      <TouchableNativeFeedback onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}>
      <View
        style={{height:55, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </View>
      </TouchableNativeFeedback>)
  })

  componentDidMount(){
    const setParamsAction = NavigationActions.setParams({
      params: { title: 'Hello' },
      key: 'TabHome',
    });
    this.props.navigation.dispatch(setParamsAction);
  }

  onCheckoutPress = () => {
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabHome' }),
        NavigationActions.navigate({ routeName: 'Carts' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text  onPress={this.onCheckoutPress}>I'm the Previews component</Text>
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
