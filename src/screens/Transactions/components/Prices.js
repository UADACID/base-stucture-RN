/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Prices extends Component {
  render() {
    const { prices } = this.props

    if (prices.length == 0) {
      return (
        <View style={styles.container}>
          <Text>Tidak Tersedia</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Tersedia</Text>
        {prices.map((obj,i)=>{
          return (
            <View key={i} style={{flex:1, flexDirection:'row', justifyContent:'space-around', borderWidth:1}}>
              <Text>{obj.service}</Text>
              <DetailCost {...obj.cost[0]}/>
            </View>
          )
        })}
      </View>
    );
  }
}

const DetailCost = (props) => {
  return (
    <View>
      <Text>Rp .{props.value}</Text>
      <Text>{props.etd}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
