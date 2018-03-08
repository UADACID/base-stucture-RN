/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class TextSize extends Component {

  handleOnValueChange = (value) => {
    this.props.onChangeFontSize(value, this.props.multipleTextDragable.activeIndex)
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          thumbTintColor='#fff'
          minimumTrackTintColor='#fff'
          value={this.props.fontSize}
          minimumValue={10}
          maximumValue={300}
          onValueChange={this.handleOnValueChange}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeFontSize = (fontSize, indexClicked) => dispatch({type:"CHANGE_FONT_SIZE", payload:{fontSize, indexClicked}})
  return {
    onChangeFontSize
  }
}

const mapStateToProps = (state) => {
  // const {textMenu} = state
  const { multipleTextDragable } = state
  const style = multipleTextDragable.texts.filter(obj => obj.isActive == true)
  const fontSize = style.length ? style[0].fontSize : 0
  return {
    multipleTextDragable,
    fontSize
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextSize)

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#2c2f3470'
  },
  slider : {
    height: 40
  }
});
