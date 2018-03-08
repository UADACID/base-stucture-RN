/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'

const { width, height } = Dimensions.get('window')

class Layer1Background extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={{ width, height}}
          source={{
            uri:this.props.imageBackground,
            priority: FastImage.priority.normal,
          }}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const modelVariants = state.modelVariants

  const { variants, activeId } = modelVariants
  // console.log({ variants, activeId });
  const productModelsSelectedId = state.productModels.selectedId
  // console.log({productModelsSelectedId});


  let filterSelectedVariant = variants.filter(variant => variant.modelId == productModelsSelectedId)
  let filterSelectedColorVariant = filterSelectedVariant.filter(variant => variant.id == activeId)

  // console.log(filterSelectedColorVariant);
  return {
    imageBackground : filterSelectedColorVariant[0].imageUrl
  }
}

export default connect(mapStateToProps)(Layer1Background)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
