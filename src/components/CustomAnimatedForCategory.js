/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';

export default class CustomAnimatedForCategory extends Component {
  constructor(){
    super()
    this.scaleAnimated = new Animated.Value(0)
    this.opacityAnimated = new Animated.Value(0)
  }

  componentDidMount(){
      Animated.timing(this.scaleAnimated, {
        toValue:1,
        duration:250
      }).start()
  }

  componentWillUnmount(){
      Animated.timing(this.scaleAnimated, {
        toValue:0,
        duration:300
      }).start()
  }

  render() {
    const scaleAnimatedStyle = {transform:[{scale:this.scaleAnimated}]}
    return (
      <Animated.View style={[scaleAnimatedStyle,{borderRadius:5, backgroundColor:'#fff', padding:1}]}>
        {this.props.children}
      </Animated.View>
    );
  }
}
