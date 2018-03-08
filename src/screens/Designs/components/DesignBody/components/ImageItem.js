/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image'

const { width, height } = Dimensions.get('window')

export default class ImageItem extends Component {
  render() {
    const {type, url, opacity} = this.props
    if (type == 'gallery' || type == 'camera') {
      return (
        <Image
          resizeMode={'contain'}
          style={{ width: width / 2, height: 100, opacity}}
          source={{
            uri:url,
          }}
        />
      )
    }
    return (
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={{ width: width / 2, height: 100}}
        source={{
          uri:url,
          priority: FastImage.priority.normal,
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
