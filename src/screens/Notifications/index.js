/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import NotificationItem from './components/NotificationItem'

export default class Notifications extends Component {

  _keyExtractor = (item, index) => index;

  _renderItem = ({item}) => (
    <NotificationItem {...item} />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={dummy}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const dummy = [
  {
    title:'Pillow Custom',
    description:'payment limit on 12-09-18',
    isRead:false,
    uri:'https://ctl.s6img.com/society6/img/-haQn4_iCtnPdur1YZn3KHdHbhw/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-0095/a/36700116_15678640/~~/soft-blue-gradient-cubes-36q-pillows.jpg'
  },
  {
    title:'Casing Iphone 11',
    description:'already paid',
    isRead:true,
    uri:'http://renanstore.com/wp-content/uploads/2017/05/iphone7-model-select-201703-600x600.jpg'
  },
  {
    title:'T-shirt V neck',
    description:'already paid',
    isRead:true,
    uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jmbeFaOfAKsHUauDSPgXpSO5H80zi_WmsnntgBholWdcCjsB'
  }
]
