/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export default class AddOnMandiriBill extends Component {
  render() {
    const {bill_key, biller_code} = this.props.data

    return (
      <View style={styles.container}>
        <Text style={{fontSize:25}}>Bill Key</Text>
        <TextInput
          underlineColorAndroid='#ffffff'
          value={bill_key}
          style={{borderWidth:0.5, borderColor:'#b6b6b6', padding:10, borderRadius:5}}
        />
        <Text style={{fontSize:25}}>Biller Code</Text>
        <TextInput
          underlineColorAndroid='#ffffff'
          value={biller_code}
          style={{borderWidth:0.5, borderColor:'#b6b6b6', padding:10, borderRadius:5}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2
  },
});
