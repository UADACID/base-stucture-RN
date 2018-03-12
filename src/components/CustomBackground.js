/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class CustomBackground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{position:'absolute', transform:[{rotate:'-24deg'}]}}>
          <Image style={{width:300, height:400}} source={this.props.image}/>
        </View>
        <View style={{flex:1, backgroundColor: '#000000ab' }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    // backgroundColor: '#0d58ab78',
    width,
    height: height / 2.3,
    transform: [
      {
        rotate : '24deg'
      },
      {
        scale : 1.8
      }
    ]
  },
});
