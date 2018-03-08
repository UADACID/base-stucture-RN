/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

const CustomTitle = (props) => (
  <View style={styles.container}>
    <Text style={{fontSize:25, marginLeft:10, color:'#000', fontWeight:'100'}}>
      {props.connectivity}
    </Text>
  </View>
);

const mapStateToProps = (state, ownProps) => {
  const connectivity = state.isConnected ? ownProps.title : ' waiting for network...'
  return {
    connectivity
  }
}

export default connect(mapStateToProps)(CustomTitle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
