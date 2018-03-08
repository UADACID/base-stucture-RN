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
  Alert,
  TouchableNativeFeedback
} from 'react-native';
import { Button, Header } from 'native-base'
import { connect } from 'react-redux'

// import CustomNavbar from '../../../../../components/CustomNavbar'

const { width, height } = Dimensions.get('window')

class ModalEditText extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     text:''
  //   }
  // }


  onChangeText = (text) => {
    // this.setState({
    //   text
    // })
    this.props.onChangeText({text, activeIndex:this.props.activeIndex })
  }

  handleDone = () => {
    const { text } = this.props
    // console.log(text);
    if (text == '') {
      // this.props.addNewText(text)
      // this.props.onChangeText({text, activeIndex:this.props.activeIndex })
      Alert.alert('',"edited text can not be empty")
      // this.props.onShowTextModalEdit()
      // this.setState({
      //   text:''
      // })
    }else {
      this.props.onShowTextModalEdit()
    }
  }

  render() {
    // const leftComponent = (
    //   <Button
    //     transparent
    //     style={{justifyContent:'center', alignItems:'center'}}
    //     onPress={this.props.onShowTextModalEdit}>
    //     <Text style={{color:'#fff', fontSize:20}}>cancel</Text>
    //   </Button>
    // )
    return (
      <View style={styles.container}>
      <Modal
        transparent
        visible={this.props.showTextModalEdit}
        animationType={'fade'}
        onRequestClose={this.props.onShowTextModalEdit}>
          <TouchableNativeFeedback onPress={this.props.onShowTextModalEdit}>
          <View style={styles.modalContainer}>
            <View style={{position:'absolute', bottom:0, flexDirection:'row' }}>
              <TextInput
                style={{height: 50, width:width-75, paddingLeft:20, backgroundColor:'#fff'}}
                underlineColorAndroid='#fff'
                onChangeText={this.onChangeText}
                autoFocus={true}
                returnKeyType='none'
                value={this.props.text}
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
  const onShowTextModalEdit = () => dispatch({type:'SHOW_TEXT_MODAL_EDIT'})
  const onChangeText = ({text, activeIndex}) => dispatch({type:'CHANGE_FONT_TEXT', payload:{text, activeIndex}})
  // const addNewText = (text) => dispatch({type:'ADD_NEW_TEXT', payload:text})
  return {
    // onShowTextModal,
    // addNewText,
    onShowTextModalEdit,
    onChangeText
  }
}

const mapStateToProps = ( state ) => {
  const { multipleTextDragable } = state
  const texts = multipleTextDragable.texts.filter(obj => obj.isActive == true)
  const text = texts.length ? texts[0].text : ''
  // console.log(multipleTextDragable);
  // console.log(text);
  return {
    showTextModalEdit: state.showTextModalEdit,
    activeIndex:multipleTextDragable.activeIndex,
    text
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditText)

const styles = StyleSheet.create({
  container: {

  },
  modalContainer: {
    backgroundColor: '#000000de',
    flex: 1,
  }
});
