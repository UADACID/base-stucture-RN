/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Spinner from 'rn-spinner';
import { connect } from 'react-redux'

const { width, height } = Dimensions.get('window')

const widthItemContainer = (width - 25) / 2



const SizeItem = (props) => {
  const changeNumberSizeOrder = (num) => {
    props.changeNumberSizeOrder({value:num, orderIndex:props.index, key:props.title })
  }
  return (
    <View style={styles.container}>
      <Text style={{marginLeft:25}}>{props.title}</Text>
      <Spinner
        max={props.maxQty}
        min={0}
        height={20}
        width={90}
        default={0}
        value={props.value}
        onNumChange={(num)=>{changeNumberSizeOrder(num)}}
        color="#59ABE3"
        numColor="#0A69FE"/>
    </View>
  );
}

const mapDispatchToProps = dispatch => ({
  changeNumberSizeOrder: (payload) => dispatch({type:'CHANGE_NUMBER_SIZE_ORDER', payload})
})

export default connect(null, mapDispatchToProps)(SizeItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // width: (width - 25) / 2,
    // marginTop:4,
    // marginBottom: 4
    justifyContent: 'space-between',
    // borderWidth: 1,
    padding: 2,
    width: widthItemContainer
  },
});
