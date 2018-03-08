/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { width, height } from '../../../../../utils'
import TabColor from './TabColor'
import TabImage from './TabImage'
import TabText from './TabText'

class SubTabMenu extends Component {
  constructor(){
    super()
    this.animatedSlideContainer = new Animated.Value(-40)
    this.animatedOpacityContainer = new Animated.Value(0)
  }

  componentDidMount(){
    this.doAnimated()
  }

  doAnimated(){
    Animated.parallel([
      Animated.timing(this.animatedSlideContainer, {
        toValue : 0,
        duration: 170
      }),
      Animated.timing(this.animatedOpacityContainer, {
        toValue : 1,
        duration: 200
      })
    ]).start()
  }

  render() {

    const styleAnimatedSlideContainer = {
      bottom : this.animatedSlideContainer,
      opacity : this.animatedOpacityContainer
    }

    const { activeTabBottom } = this.props

    switch (activeTabBottom) {
      case 'color':
        return (
          <Animated.View style={[styles.container,styleAnimatedSlideContainer]}>
            <TabColor />
          </Animated.View>
        );
        break;
      case 'image':
        return (
          <View style={[styles.container]}>
            <TabImage />
          </View>
        );
        break;
      case 'text':
        return (
          <View style={[styles.container]}>
            <TabText />
          </View>
        );
        break;
      default:
        return (
          <View />
        );
    }
  }
}

const mapStateToProps = (state) => {
  let activeTabBottom = state.activeTabBottom
  return {
    activeTabBottom
  }
}

export default connect(mapStateToProps)(SubTabMenu)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfafad1'
    // flex: 1,
  },
});
