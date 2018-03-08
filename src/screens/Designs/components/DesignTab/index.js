/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TabBottom from './TabBottom'

export default class DesignTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBottom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom: 0
    // flex: 1,
  },
});
