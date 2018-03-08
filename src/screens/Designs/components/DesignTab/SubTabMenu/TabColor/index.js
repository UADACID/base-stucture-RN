/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import { Card } from 'native-base'
import FastImage from 'react-native-fast-image'

const colors = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ecf0f1',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ecf0f1',
]

class TabColor extends Component {

  state = {
    indexSelected : 2
  }

  changeSelected = (indexSelected) => {
    this.setState({indexSelected})
  }

  renderSelected(dataSingleVariant){
    return (
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={{height:75, width:65}}
        source={{
          uri:dataSingleVariant.imageUrl,
          priority: FastImage.priority.normal,
        }}/>
    )
  }

  renderNotSelected(dataSingleVariant){
    return(
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={{height:60, width:50}}
        source={{
          uri:dataSingleVariant.imageUrl,
          priority: FastImage.priority.normal,
        }}/>
    )
  }

  renderModelImage({model, i, selectedId}){
    const { modelVariants } = this.props
    const { variants, activeId } = modelVariants
    // console.log(model.id);
    // console.log(variants);
    const variantFilter = variants.filter(variant => variant.modelId == model.id)

    const variantFilterBySelected = variantFilter.filter(variant => variant.id == activeId)
    // console.log(variantFilter);
    const dataSingleVariant = variantFilterBySelected.length == 0 ? variantFilter[0] : variantFilterBySelected[0]
    // console.log(dataSingleVariant);
    // const backgroundColor = color
    return (
      <TouchableOpacity
        key={i}
        activeOpacity={.9}
        onPress={()=>this.props.changeSelectedModel(model.id)}
        style={{borderRadius:2, margin:5}}>
      <Card>
        {selectedId == model.id ? this.renderSelected(dataSingleVariant) : this.renderNotSelected(dataSingleVariant)}
      </Card>
      </TouchableOpacity>
    )
  }

  render() {
    const { productModels } = this.props
    const { selectedId } = productModels
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {productModels.models.map((model,i) => this.renderModelImage({model,i,selectedId}))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    productModels: state.productModels,
    modelVariants: state.modelVariants
  }
}

const mapDispatchToProps = dispatch => ({
  changeSelectedModel : (payload) => {
    dispatch({type:'CHANGE_SELECTED_MODEL', payload})
    const modelId = payload
    dispatch({type:'SET_SELECTED_MODEL_VARIANT', modelId})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TabColor)

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding: 5
    // flexDirection:'row',
  },
});
