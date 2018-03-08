/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class NoCustomGestures extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
          <TouchableOpacity activeOpacity={.9}>
          <View style={this.props.containerChildStyle}>
            {this.props.children}
          </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
