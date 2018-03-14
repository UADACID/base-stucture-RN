/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class DefaultAddress extends Component {

  render() {
    const { is_selected, label, as_name, province, city, detail_address, phone_number } = this.props.selectedAddress

    return (
      <View style={styles.container}>
        <View style={styles.addressHeader}>
          <Text style={[{fontWeight:'bold', fontSize:17},styles.textDistance]}>{label}</Text>
          <Text style={styles.textDistance}>{as_name}</Text>
          <Text style={styles.textDistance}>{detail_address}</Text>
          <Text style={[styles.textDistance,{marginTop:7, marginBottom:7}]}>{phone_number}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const address = state.addressReducer
  const filterBySelectedAddress = address.filter(obj => obj.is_selected == true)
  const selectedAddress = filterBySelectedAddress[0]
  return {
    selectedAddress
  }
}

export default connect(mapStateToProps)(DefaultAddress)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressHeader : {
    paddingLeft: 20,
    paddingRight: 20
  },
  textDistance : {
    marginTop: 2,
    marginBottom: 2
  }
});
