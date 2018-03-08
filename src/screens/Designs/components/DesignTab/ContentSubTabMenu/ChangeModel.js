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

class ChangeModel extends Component {

  state = {
    indexSelected : 1
  }

  renderColorButton(variant, i){
    const { activeId } = this.props.modelVariants
    const backgroundColor = variant.color
    const uniqStyle = variant.id == activeId ? {width:30, height:30, borderRadius:15} : {width:20, height:20, borderRadius:2}
    return (
      <TouchableOpacity
        key={i}
        onPress={()=>this.props.changeSelectedModelVariantColor(variant.id)}
        style={{height:35, width:35, justifyContent:'center'}}>
        <View
          key={i}
          style={[{backgroundColor, margin:5}, uniqStyle]}>

        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { modelVariants, activeModelId } = this.props
    const { variants, activeId } = modelVariants

    const filterVariantsById = variants.filter(variant => variant.modelId == activeModelId)
    return (
      <View style={styles.container}>
        <Card style={{padding:5}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {filterVariantsById.map((variant,i) => this.renderColorButton(variant,i))}
        </ScrollView>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeModelId : state.productModels.selectedId,
    modelVariants : state.modelVariants
  }
}

const mapDispatchToProps = dispatch => ({
  changeSelectedModelVariantColor : (payload) => dispatch({type:'CHANGE_SELECTED_MODEL_VARIANT_COLOR', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeModel)

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding: 5
    // flexDirection:'row',
  },
});
