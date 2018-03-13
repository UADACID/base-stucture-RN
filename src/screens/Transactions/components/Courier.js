/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Courier extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{padding:10}}>Pilih Kurir</Text>
        <TouchableOpacity style={styles.button}>
          <Text>JNE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>POS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>TIKI</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button : {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0073b2'
  }
});
