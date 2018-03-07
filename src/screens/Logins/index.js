/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { Icon, Button } from 'native-base'

export default class Logins extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Sign Up`,
    headerLeft:(
      <Button
        onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
        style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </Button>)
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Logins component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
