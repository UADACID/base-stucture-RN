/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { Content, Card, CardItem, Body, Icon, Left, Right } from 'native-base';

// import TextTitle from '../../../components/TextTitle'

const { width, height } = Dimensions.get('window')

const images = [
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.56.51%20PM.png?alt=media&token=130ec2e2-080b-4861-a2ed-8f368015e88d',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.54.36%20PM.png?alt=media&token=7b361575-5a7b-4276-8948-d98faa8c83aa',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.56.51%20PM.png?alt=media&token=130ec2e2-080b-4861-a2ed-8f368015e88d',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.54.36%20PM.png?alt=media&token=7b361575-5a7b-4276-8948-d98faa8c83aa',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.56.51%20PM.png?alt=media&token=130ec2e2-080b-4861-a2ed-8f368015e88d',
]

const HEIGHT_MODELS = height / 3.0
const WIDTH_MODELS = width / 2.5

class CustomListPromote extends Component {

  _keyExtractor = (item, index) => index;

  renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={()=>alert('under development')}>
        <Card>
          <CardItem style={styles.cardContainer}>
            <FastImage
              resizeMode={FastImage.resizeMode.contain}
              style={styles.modelImage}
              source={{uri:item}}/>
              <View style={styles.containerBrush}>
                <View style={styles.buttonBuyer}>
                  <Text style={{color:'#f7355d'}}>BUY</Text>
                </View>
              </View>
          </CardItem>
          <CardItem style={styles.cardContainer}>
            <View style={styles.footer}>
              <Image
                resizeMode='contain'
                style={{width:17, height:17}}
                source={require('../../../../assets/categories/rp.png')}>
              </Image>
              <Text numberOfLines={1} ellipsizeMode='tail'> 75.000,00</Text>
            </View>
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

export default connect(mapStateToProps)(CustomListPromote)

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
    bottom:10,
    right:10,
    height:40,
    width:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f7355d',
    borderRadius:20,
  },
  footer : {
    flexDirection:'row',
    justifyContent: 'space-around',
    width:WIDTH_MODELS
  },
  buttonBuyer : {
    height:35,
    width: 35,
    borderRadius:18,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
});
