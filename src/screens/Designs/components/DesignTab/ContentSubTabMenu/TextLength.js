/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'

class TextLength extends Component {

  handleOnValueChange = (value) => {
    this.props.onChangeFontLength(value, this.props.multipleTextDragable.activeIndex)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          thumbTintColor='#fff'
          minimumTrackTintColor='#fff'
          value={this.props.fontLength}
          minimumValue={1}
          maximumValue={300}
          onValueChange={this.handleOnValueChange}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeFontLength = (fontLength, indexClicked) => dispatch({type:"CHANGE_FONT_LENGTH", payload:{fontLength, indexClicked}})
  return {
    onChangeFontLength
  }
}

const mapStateToProps = (state) => {
  const { multipleTextDragable } = state
  const style = multipleTextDragable.texts.filter(obj => obj.isActive == true)
  const fontLength = style.length ? style[0].fontLength : 0
  return {
    multipleTextDragable,
    fontLength
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextLength)

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#2c2f3470'
  },
  slider : {
    height: 40
  }
});
