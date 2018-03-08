/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import ImageButton from './ImageButton'
import TextButton from './TextButton'

class HeaderButon extends Component {
  render() {
    const { activeTabBottom } = this.props
    switch (activeTabBottom) {
      case "text":
        return (
          <TextButton />
        );
        break;
      case "image":
        return (
          <ImageButton />
        );
        break;
      default:
        return (
          <View />
        )
    }

  }
}

const mapStateToProps = ( state ) => {
  return {
    activeTabBottom : state.activeTabBottom
  }
}

export default connect(mapStateToProps)(HeaderButon)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
