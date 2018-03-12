/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'native-base'

const CheckoutButton = (props) => (
    <Button
      onPress={()=> props.dispatch({type:'Navigation/NAVIGATE', routeName:'Transactions'})}
      style={styles.container}>
      <Text>CHECKOUT</Text>
    </Button>
);

export default connect()(CheckoutButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#dae9ef'
  },
});
