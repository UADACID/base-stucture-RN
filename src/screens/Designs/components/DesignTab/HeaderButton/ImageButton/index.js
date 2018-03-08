/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base'

class ImageButton extends Component {

  handleRemoveImageSelected = () => {
    const { removeImageSelected, activeIndex, imagesLength, multipleImageDragable } = this.props

    if (imagesLength != 0) {
      removeImageSelected({activeIndex, multipleImageDragable})
    }
  }

  doRemovingImage = () => {
    console.log(this.props.activeIndex );
    if (this.props.activeIndex != null) {
      Alert.alert(
        '',
        'are you sure to delete the image ?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.handleRemoveImageSelected()},
        ],
        { cancelable: false }
      )
    }

  }

  render() {
    const { imagesLength } = this.props
    let deleteButton = imagesLength == 0 ? <View /> : (
      <Button
        small
        transparent
        onPress={this.doRemovingImage}
        style={styles.buttonRemove}>
        <Icon name='ios-trash-outline' style={{color:'#fff'}}/>
      </Button>
    )

    return (
      <View style={styles.container}>
        {deleteButton}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const removeImageSelected = (payload) => {dispatch({type:'REMOVE_IMAGE_SELECTED', payload: payload.activeIndex})}
  return {
    removeImageSelected,
  }
}

const mapStateToProps = ( state ) => {
  const { multipleImageDragable } = state

  return {
    activeIndex : multipleImageDragable.activeIndex,
    imagesLength : multipleImageDragable.images.length
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageButton)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'flex-end',
    padding: 5
  },
  buttonAdd : {
    backgroundColor: '#4ecdc4a3'
  },
  buttonRemove : {
    marginLeft: 20,
    backgroundColor: '#f443368f'
  }
});
