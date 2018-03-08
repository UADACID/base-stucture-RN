/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux'
import CustomGestures from '../components/Gestures'
import ImageItem from '../components/ImageItem'

const { width, height } = Dimensions.get('window')
const CENTER_X_POSISITION_TEXT = (width/2)-50
const CENTER_Y_POSISITION_TEXT = (height/3)

const CENTER_X_POSISITION_IMAGE = (width/2)-100
const CENTER_Y_POSISITION_IMAGE = (height/3)


class Layer4DragableArea extends Component {

  onTapContainer = () => {
    this.props.clearAllActiveText()
    this.props.clearAllActiveImage()
  }

  onTapText(i, type){

    if (type == 'text') {
      this.props.clearAllActiveImage()
      this.props.changeTextObjectClicked(i)
      //handleOpenTabText
      this.props.onChangeTabBottom(type)
      return
    }

    if (type == 'image') {
      // this.props.changeTextObjectClicked(i)
      //handleOpenTabText
      this.props.clearAllActiveText()
      this.props.changeImageObjectClicked(i)
      // this.props.onChangeTabBottom(type)
      return
    }

  }

  convertToObj = (item) => {

    return JSON.parse(JSON.stringify(item))
  }

  onTransformAdapter(array){
    let newArray = []
    array.map(obj => {
      for (var variable in obj) {
          console.log(variable);
          let key = variable
          let value = obj[variable]
          newArray.push({key, value})
      }
    })
    return newArray
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onTapContainer}>
      <View style={{height, width, position:'absolute'}}>
      {
        this.props.multipleImageDragable.images.map((obj,i) => {
          // console.log('disabled = '+obj.isDeleted);
          // console.log(obj);
          return (
            <View key={i} style={{position:'absolute', left:CENTER_X_POSISITION_IMAGE, top: CENTER_Y_POSISITION_IMAGE}}>
            <CustomGestures
              key={i}
              containerStyle={{width:obj.isDeleted ? 0 : width / 2, position:'absolute'}}
              containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? 'red' : '#ffffff00'}}
              onChangeStyle={(event, styles)=> {
                let { left, top, transform } = styles
                let trans1 = this.convertToObj(transform['1'])
                let trans2 = this.convertToObj(transform['0'])
                let array = [trans1,trans2]

                let transformResult = this.onTransformAdapter(array);
                let rotate = transformResult.filter((obj => obj.key == 'rotate'))
                let scale = transformResult.filter((obj => obj.key == 'scale'))
                // console.log({ left, top, rotate:rotate[0].value, scale:scale[0].value, activeIndex:i });
                this.props.onChangePositionImage({ left, top, rotate:rotate[0].value, scale:scale[0].value, activeIndex:i })
              }}
              onPressIn={()=>{ this.onTapText(i, 'image')}}
              onLongPress={()=> console.log('')}
              >
                <ImageItem url={obj.url} type={obj.type} opacity={0}/>
            </CustomGestures>
            </View>
          )
        })
      }
      {
        this.props.multipleTextDragable.texts.map((obj,i) => {
          // console.log(obj);
          return (
            <View key={i} style={{position:'absolute', left:CENTER_X_POSISITION_TEXT, top: CENTER_Y_POSISITION_TEXT}}>
              <CustomGestures
                key={i}
                containerStyle={{width:obj.isDeleted ? 0 : obj.fontLength, position:'absolute'}}
                containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? 'red' : '#ffffff00'}}
                onChangeStyle={(event, styles)=> {
                  let { left, top, transform } = styles
                  let trans1 = this.convertToObj(transform['1'])
                  let trans2 = this.convertToObj(transform['0'])
                  let array = [trans1,trans2]

                  let transformResult = this.onTransformAdapter(array);
                  let rotate = transformResult.filter((obj => obj.key == 'rotate'))
                  let scale = transformResult.filter((obj => obj.key == 'scale'))
                  // console.log({ left, top, rotate:rotate[0].value, scale:scale[0].value, activeIndex:i });
                  this.props.onChangePositionText({ left, top, rotate:rotate[0].value, scale:scale[0].value, activeIndex:i })
                }}
                onPressIn={()=>{ this.onTapText(i, 'text')}}
                onLongPress={this.props.onShowTextModalEdit}
                >
                  <Text style={{padding:5, fontFamily: obj.fontFamily, fontSize: obj.fontSize, color:obj.fontColor, opacity:0}}>
                    {obj.text}
                  </Text>
              </CustomGestures>
            </View>
          )
        })
      }
      </View>
      </TouchableNativeFeedback>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  const onChangePositionText = ({left, top,rotate, scale, activeIndex}) => dispatch({type:'CHANGE_POSITION_TEXT', payload:{left, top, rotate, scale, activeIndex}})
  const onChangePositionImage = ({left, top,rotate, scale, activeIndex}) => dispatch({type:'CHANGE_POSITION_IMAGE', payload:{left, top, rotate, scale, activeIndex}})
  const changeTextObjectClicked = (payload) => dispatch({type:'CHANGE_TEXT_OBJECT_CLICKED', payload})
  const changeImageObjectClicked = (payload) => dispatch({type:'CHANGE_IMAGE_OBJECT_CLICKED', payload})
  const clearAllActiveText = () => dispatch({type:'CLEAR_ALL_ACTIVE_TEXT'})
  const clearAllActiveImage = () => dispatch({type:'CLEAR_ALL_ACTIVE_IMAGE'})
  const onChangeTabBottom = (tabName) => dispatch({type:'CHANGE_TAB_BOTTOM_SELECTED', payload:tabName})
  const onShowTextModalEdit = () => dispatch({type:'SHOW_TEXT_MODAL_EDIT'})
  return {
    onChangePositionText,
    onChangePositionImage,
    changeTextObjectClicked,
    changeImageObjectClicked,
    clearAllActiveText,
    clearAllActiveImage,
    onChangeTabBottom,
    onShowTextModalEdit
  }
}

const mapStateToProps = ( state ) => {
  // console.log(state.multipleTextDragable.texts);
  return {
    multipleTextDragable : state.multipleTextDragable,
    multipleImageDragable : state.multipleImageDragable
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layer4DragableArea)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
