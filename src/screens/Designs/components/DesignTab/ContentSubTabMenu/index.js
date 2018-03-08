/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import TextFont from './TextFont'
import TextColor from './TextColor'
import TextSize from './TextSize'
import TextLength from './TextLength'

import ImagePhotos from './ImagePhotos'

import ChangeModel from './ChangeModel'

class ContentSubTabMenu extends Component {

  renderTextContent(){
    const { activeSubTabButtom } = this.props
      switch (activeSubTabButtom) {
        case "textFont":
          return(
            <TextFont />
          )
          break;
        case "textColor":
          return(
            <TextColor />
          )
          break;
        case "textSize":
          return(
            <TextSize />
          )
          break;
        case "textLength":
          return(
            <TextLength />
          )
          break;
        default:
          return(
            <View />
          )
      }
  }

  renderImageContent(){
    const { activeSubTabButtom } = this.props
    switch (activeSubTabButtom) {
      case 'imageGallery':
        return (
          <ImagePhotos />
        )
        break;
      default:
        return(
          <View />
        )
    }

  }

  renderColorContent(){
    return(
      <ChangeModel />
    )
  }


  render(){
    const { activeSubTabButtom, activeTabBottom} = this.props

    switch (activeTabBottom) {
      case "text":
        return this.renderTextContent()
        break;
      case "image":
        return this.renderImageContent()
        break;
      case "color":
        return this.renderColorContent()
        break;
      default:
        return <View />
    }
  }

  // render() {
  //   const { activeSubTabButtom, activeTabBottom} = this.props
  //   switch (activeSubTabButtom) {
  //     case "textFont" && "nul":
  //       return(
  //         <TextFont />
  //       )
  //       break;
  //     case "textColor":
  //       return(
  //         <TextColor />
  //       )
  //       break;
  //     case "textSize":
  //       return(
  //         <TextSize />
  //       )
  //       break;
  //     case "textLength":
  //       return(
  //         <TextLength />
  //       )
  //       break;
  //     default:
  //       return(
  //         <View />
  //       )
  //   }
  // }
}

const mapStateToProps = (state) => {
  const { activeSubTabButtom, activeTabBottom } = state
  return {
    activeSubTabButtom,
    activeTabBottom
  }
}

export default connect(mapStateToProps)(ContentSubTabMenu)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
