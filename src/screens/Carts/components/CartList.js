/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Content, Card, CardItem, Body, Text } from 'native-base';

import CartListItem from './CartListItem'
// let index = 0
class CartList extends Component {

  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => {

    // index += 1
    return (
       <CartListItem {...item}/>
     );

  }

  renderEmptyCart = () => (
    <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', padding:40}}>shopping cart is empty</Text>
  )

  render() {
    return (
      <View style={styles.container}>
        <Content>
          <Card>
            <CardItem style={styles.cardContainer}>
              <FlatList
                data={this.props.orderReducer}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListEmptyComponent={this.renderEmptyCart}
                />
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderReducer: state.orderReducer
  }
}

export default connect(mapStateToProps)(CartList)

const dummyData = [
  {
    title: 'Bantal Kursi',
    uri:'https://ctl.s6img.com/society6/img/KEdBoNFIvb24c6R2GQ6wNHWL9Qc/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-0052/a/22341997_15077765/~~/copper-and-midnight-navy-pillows.jpg'
  },
  {
    title: 'Kemeja Kerah O',
    uri:'https://www.lanangindonesia.com/uploads/2017/03/shanghai-1.jpg'
  },
  {
    title: 'Casing Iphone 9',
    uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//1205/oem_ultrathin-baby-skin-iphone-6-6s-shining-case-premium---merah_full07.jpg'
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  cardContainer:{
    paddingLeft:0,
    paddingTop:0,
    paddingBottom:0,
    paddingRight:0
  }
});
