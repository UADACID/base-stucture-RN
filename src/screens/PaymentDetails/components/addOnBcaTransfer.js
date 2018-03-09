/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export default class AddOnBcaTransfer extends Component {
  render() {

    if (this.props.payment_type == 'echannel') {
      return <View />
    }
    let value = ''
    console.log(this.props);
    if (this.props.data && this.props.data.va_numbers[0].length !== 0 ) {
      value = this.props.data.va_numbers[0].va_number
    }
    // const value = this.props.data.va_numbers[0].length == 0 ? 'waiting...' : this.props.data.va_numbers[0].va_number
    return (
      <View style={styles.container}>
        <Text style={{fontSize:25}}>Virtual Account Number</Text>
        <TextInput
          underlineColorAndroid='#ffffff'
          value={value}
          style={{borderWidth:0.5, borderColor:'gray', padding:10, borderRadius:5}}
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
