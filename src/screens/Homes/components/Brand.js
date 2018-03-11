/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Content, Card, CardItem, Body, Icon, Left } from 'native-base';
import { brands } from '../../../../assets/brand/brands.js'
// import TextTitle from '../../../components/TextTitle'

const { width, height } = Dimensions.get('window')


export default class Brand extends Component {


  _keyExtractor = (item, index) => index;

  renderItem = (item) => {
    // console.log(item);
    return (
      <TouchableOpacity>
          <Card>
            <CardItem>
              <Body>
              <Image
                resizeMode='contain'
                style={{width:width/5.5, height:width/5.5}}
                source={item.item.uri}/>
              </Body>
            </CardItem>
          </Card>
      </TouchableOpacity>
    )
  }

  render() {

    const rightComponent = (
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginRight:10}}>
          <Text style={{padding:10, paddingRight:10, color:'#acadae'}}>Lihat Semua</Text>
          <Icon name='ios-arrow-forward-outline' style={{fontSize:20, color:'#f7355d'}}/>
        </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <Text style={{padding:this.props.title? 10 : 0, paddingLeft:this.props.title ? 20 : 0}}>{this.props.title}</Text>
        <FlatList
          data={brands}
          horizontal={true}
          numColumns={1}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
