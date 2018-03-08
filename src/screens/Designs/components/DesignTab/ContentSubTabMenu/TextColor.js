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
]

class TextColor extends Component {

  renderColorButton({color, i, onChangeFontColor, isPressed, fontColor, multipleTextDragable}){
    const backgroundColor = color
    return (
      <TouchableOpacity
        key={i}
        onPress={()=>onChangeFontColor(color, multipleTextDragable.activeIndex)}
        style={[{
          backgroundColor,
          width:15,
          height:15,
          borderRadius:10,
          margin:5,
        },isPressed(color, fontColor)]}>

      </TouchableOpacity>
    )
  }

  render() {
    const { onChangeFontColor, fontColor, isPressed, multipleTextDragable } = this.props
    return (
      <View style={styles.container}>
        <Card>
        <ScrollView horizontal={true}>
          {colors.map((color,i) => this.renderColorButton({color,i, onChangeFontColor, isPressed, fontColor, multipleTextDragable}))}
        </ScrollView>
        </Card>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeFontColor = (fontColor, indexClicked) => dispatch({type:"CHANGE_FONT_COLOR", payload:{fontColor, indexClicked}})
  const isPressed = (indexFontColor, fontColor) => {
    if (indexFontColor === fontColor) {
      return {
        width : 30,
        height : 30,
        borderRadius : 15
      }
    } else {
      return {}
    }
  }
  return {
    onChangeFontColor,
    isPressed
  }
}

const mapStateToProps = (state) => {
  const { multipleTextDragable } = state
  const style = multipleTextDragable.texts.filter(obj => obj.isActive == true)
  const fontColor = style.length ? style[0].fontColor : ''
  return {
    fontColor:fontColor,
    multipleTextDragable
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextColor)

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding: 10
    // flexDirection:'row',
  },
});
