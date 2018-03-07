/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=> this.props.navigation.dispatch({type:'Navigation/NAVIGATE', routeName:'Logins'})}>I'm the Settings component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
