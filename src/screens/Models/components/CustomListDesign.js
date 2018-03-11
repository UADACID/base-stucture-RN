/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { Content, Card, CardItem, Body, Icon, Left, Right } from 'native-base';

// import TextTitle from '../../../components/TextTitle'

const { width, height } = Dimensions.get('window')

const images = [
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%209.34.59%20PM.png?alt=media&token=f4a5554d-c5a6-4666-a653-6e30ac1404f7',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%209.38.31%20PM.png?alt=media&token=e98dee35-c337-4b35-9d25-baabfce66f2c',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%209.40.14%20PM.png?alt=media&token=0fd1b0a3-78d7-4757-a300-374d87d462ce',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.25.57%20PM.png?alt=media&token=bcfca931-3833-4abd-a15c-8adb8bd52011',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.29.14%20PM.png?alt=media&token=3bfd89bd-f83b-4574-81d9-1c18c3166a02'

]

const HEIGHT_MODELS = height / 4.5
const WIDTH_MODELS = width / 3.5

class CustomListDesign extends Component {

  _keyExtractor = (item, index) => index;

  renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>console.log('Designs')}>
        <Card>
          <CardItem style={styles.cardContainer}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={styles.modelImage}
              source={{uri:item}}/>
              <View style={styles.containerBrush}>
                <Image
                  style={{height:20, width:20}}
                  source={require('../../../../assets/categories/paintbrush.png')}
                />
              </View>
          </CardItem>
          <CardItem style={[styles.cardContainer,{paddingLeft:15, paddingRight:15,width:WIDTH_MODELS}]}>
            <Body>
              <Text numberOfLines={2} ellipsizeMode='tail' style={{fontWeight:'100'}}>Name of This model</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  }

  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <Text style={{padding:title? 10 : 0, paddingLeft:title ? 20 : 0, alignSelf:'flex-end'}}>{title}</Text>
        <FlatList
          data={images}
          horizontal={true}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // models:state.models
    models : []
  }
}

export default connect(mapStateToProps)(CustomListDesign)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  cardContainer : {
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:5
  },
  modelImage : {
    width:WIDTH_MODELS,
    height:HEIGHT_MODELS,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  containerBrush : {
    position:'absolute',
    bottom:0,
    right:10,
    height:30,
    width:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f7355d',
    borderRadius:15
  }
});
