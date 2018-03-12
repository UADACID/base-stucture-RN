/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import SizeItem from './sizeItem'

export default class SizeList extends Component {
  render() {
    const { qtySizeM, qtySizeS, qtySizeL, qtySizeXL, qtySizeXXL, index, valueOfSizeS, valueOfSizeM, valueOfSizeL, valueOfSizeXL, valueOfSizeXXL} = this.props
    return (
      <View style={styles.container}>
        {qtySizeS == 0 ? false : <SizeItem maxQty={qtySizeS} index={index} value={valueOfSizeS} title={'S'}/>}
        {qtySizeM == 0 ? false : <SizeItem maxQty={qtySizeM} index={index} value={valueOfSizeM} title={'M'}/>}
        {qtySizeL == 0 ? false : <SizeItem maxQty={qtySizeL} index={index} value={valueOfSizeL} title={'L'}/>}
        {qtySizeXL == 0 ? false : <SizeItem maxQty={qtySizeXL} index={index} value={valueOfSizeXL} title={'XL'}/>}
        {qtySizeXXL == 0 ? false : <SizeItem maxQty={qtySizeXXL} index={index} value={valueOfSizeXXL} title={'XXL'}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 5,
    paddingBottom: 5
  },
});
