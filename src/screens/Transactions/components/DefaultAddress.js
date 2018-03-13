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
    const { isSelected, label, asName, province, city, detailAddress, phoneNumber } = this.props.selectedAddress
    return (
      <View style={styles.container}>
        <View style={styles.addressHeader}>
          <Text style={[{fontWeight:'bold', fontSize:17},styles.textDistance]}>{label}</Text>
          <Text style={styles.textDistance}>{asName}</Text>
          <Text style={styles.textDistance}>{detailAddress}</Text>
          <Text style={[styles.textDistance,{marginTop:7, marginBottom:7}]}>{phoneNumber}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const userData = state.userReducer
  const filterBySelectedAddress = userData.address.filter(obj => obj.isSelected == true)
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
