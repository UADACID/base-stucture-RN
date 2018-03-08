/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import { Button, Header } from 'native-base'
import { connect } from 'react-redux'

import CustomNavbar from '../../../../../components/CustomNavbar'

const { width, height } = Dimensions.get('window')

class ModalTextInput extends Component {

  state = {
    text:''
  }

  onChangeText = (text) => {
    this.setState({
      text
    })
    // this.props.onChangeText({text, activeIndex:this.props.activeIndex })
  }

  handleDone = () => {
    const { text } = this.state
    // console.log(text);
    if (text != '') {
      this.props.addNewText(text)
      this.props.onShowTextModal()
      this.setState({
        text:''
      })
    }else {
      this.props.onShowTextModal()
    }
  }

  render() {
    // console.log(this.state.text);
    // const returnKeyType = this.state.text == '' ? 'none' : 'done'
    const leftComponent = (
      <Button
        transparent
        style={{justifyContent:'center', alignItems:'center'}}
        onPress={this.props.onShowTextModal}>
        <Text style={{color:'#fff', fontSize:20}}>cancel</Text>
      </Button>
    )

    // const rightComponent = (
    //   <Button
    //     transparent
    //     style={{justifyContent:'center', alignItems:'center'}}
    //     onPress={this.handleDone}>
    //     <Text style={{color:'#fff', fontSize:20}}>done</Text>
    //   </Button>
    // )
    return (
      <View style={styles.container}>
      <Modal
        transparent
        visible={this.props.showTextModal}
        animationType={'fade'}
        onRequestClose={this.props.onShowTextModal}>
          <TouchableNativeFeedback onPress={this.props.onShowTextModal}>
          <View style={styles.modalContainer}>
            <CustomNavbar
              leftComponent={leftComponent}/>
            <View style={{position:'absolute', bottom:0, flexDirection:'row' }}>
              <TextInput
                style={{height: 50, width:width-75, paddingLeft:20, backgroundColor:'#fff'}}
                underlineColorAndroid='#fff'
                onChangeText={this.onChangeText}
                autoFocus={true}
                returnKeyType='none'
                value={this.state.text}
              />
              <Button
                style={{width:75, height:50, backgroundColor:'#4db6ac', justifyContent:'center', alignItems:'center'}}
                onPress={this.handleDone}>
                <Text style={{color:'#fff', fontSize:20}}>done</Text>
              </Button>
            </View>
          </View>
          </TouchableNativeFeedback>
        </Modal>
      </View>
    );
  }
}
const mapDispatchToProps = ( dispatch ) => {
  const onShowTextModal = () => dispatch({type:'SHOW_TEXT_MODAL'})
  // const onChangeText = ({text, activeIndex}) => dispatch({type:'CHANGE_FONT_TEXT', payload:{text, activeIndex}})
  const addNewText = (text) => dispatch({type:'ADD_NEW_TEXT', payload:text})
  return {
    onShowTextModal,
    addNewText
    // onChangeText
  }
}

const mapStateToProps = ( state ) => {
  const { multipleTextDragable } = state
  const texts = multipleTextDragable.texts.filter(obj => obj.isActive == true)
  const text = texts.length ? texts[0].text : ''
  // console.log(multipleTextDragable);
  // console.log(text);
  return {
    showTextModal: state.showTextModal,
    activeIndex:multipleTextDragable.activeIndex,
    text
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTextInput)

const styles = StyleSheet.create({
  container: {

  },
  modalContainer: {
    backgroundColor: '#000000de',
    flex: 1,
  }
});
