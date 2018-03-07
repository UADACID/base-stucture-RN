/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Homes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=> this.props.navigation.navigate('Models')}>I'm the Homes component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
