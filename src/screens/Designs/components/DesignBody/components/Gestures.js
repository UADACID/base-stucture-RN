/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Gestures from 'react-native-easy-gestures';

export default class CustomGestures extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Gestures
          scalable={this.props.scalable}
          onChange={this.props.onChangeStyle}>
          <TouchableOpacity activeOpacity={.9}
            onLongPress={this.props.onLongPress}
            onPressIn={this.props.onPressIn}>
          <View style={this.props.containerChildStyle}>
            {this.props.children}
          </View>
          </TouchableOpacity>
        </Gestures>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
