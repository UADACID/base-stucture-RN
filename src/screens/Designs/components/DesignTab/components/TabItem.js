/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class TabItem extends Component {
  render() {

    const TabContext = this.props.icon ? (
      <Image style={{width: 20, height: 20}} source={this.props.icon}/>
    ) : <View />

    const Title = this.props.title ? (
      <Text style={this.props.titleStyle}>{this.props.title}</Text>
    ) : <View />

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={[styles.container, this.props.style]}>
        {TabContext}
        {Title}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
