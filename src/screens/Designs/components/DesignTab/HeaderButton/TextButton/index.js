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

class TextButton extends Component {

  handleRemoveTextSelected = () => {
    const { removeTextSelected, activeIndex, textsLength, multipleTextDragable } = this.props

    if (textsLength != 0) {
      removeTextSelected({activeIndex, multipleTextDragable})
    }
  }

  doRemovingText = () => {
    console.log(this.props.activeIndex );
    if (this.props.activeIndex != null) {
      Alert.alert(
        '',
        'are you sure to delete the selected text',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => this.handleRemoveTextSelected()},
        ],
        { cancelable: false }
      )
    }

  }

  handleAddText = () => {
    this.props.onShowTextModal()
  }

  render() {
    const { textsLength } = this.props
    let deleteButton = textsLength == 0 ? <View /> : (
      <Button
        small
        transparent
        onPress={this.doRemovingText}
        style={styles.buttonRemove}>
        <Icon name='ios-trash-outline' style={{color:'#fff'}}/>
      </Button>
    )

    return (
      <View style={styles.container}>
        <Button
          small
          transparent
          onPress={this.handleAddText}
          style={styles.buttonAdd}>
          <Icon name='md-add' style={{color:'#fff'}}/>
        </Button>
        {deleteButton}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch
) => {
  // const addNewText = (text) => dispatch({type:'ADD_NEW_TEXT'})
  const onShowTextModal = () => dispatch({type:'SHOW_TEXT_MODAL'})
  const removeTextSelected = (payload) => {dispatch({type:'REMOVE_TEXT_SELECTED', payload: payload.activeIndex})}
  return {
    // addNewText,
    removeTextSelected,
    onShowTextModal
  }
}

const mapStateToProps = ( state ) => {
  const { multipleTextDragable } = state
  // console.log(multipleTextDragable);
  const texts = multipleTextDragable.texts.filter(obj => obj.isDeleted != true)

  return {
    activeIndex : multipleTextDragable.activeIndex,
    multipleTextDragable,
    textsLength : texts.length
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextButton)

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
