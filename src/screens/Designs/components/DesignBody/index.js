/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
// import { Button } from 'native-base'
// import { connect } from 'react-redux'
// import Gestures from 'react-native-easy-gestures';
// import CustomGestures from './Gestures'
// import NoCustomGestures from './NoGestures'
import Layer1Background from './Layer1Background'
import Layer2ObjectAttachment from './Layer2ObjectAttachment'
import Layer3HollowImage from './Layer3HollowImage'
import Layer4DragableArea from './Layer4DragableArea'
import ModalTextInput from './components/ModalTextInput'
import ModalEditText from './components/ModalEditText'


// const { width, height } = Dimensions.get('window')
//
// const ITEM_DRAGABLE_POSITION = (width / 2) - 50
// const CENTER_X_POSISITION_TEXT = (width/2)-50
// const CENTER_Y_POSISITION_TEXT = (height/3)


export default class DesignBody extends Component {

  onGetRefs = () => {
     // this.refs.zxc.getRefs();
     // console.log(this.refs.zxc.wrappedInstance.refs);
     return this.refs.zxc.wrappedInstance.refs
     // alert('sssss')
  }

  render(){
    return (
      <View>
        <Layer1Background />
        <Layer2ObjectAttachment ref="zxc" />
        <Layer3HollowImage />
        <Layer4DragableArea />
        <ModalTextInput />
        <ModalEditText />
      </View>
    )
  }
  // render() {
  //   // console.log(this.props.textMenu);
  //   const { multipleTextDragable } = this.props
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{padding:5}}>{multipleTextDragable.activeIndex}</Text>
  //       <Text style={{padding:5}}>{JSON.stringify(this.state.styles)}</Text>
  //       <CustomGestures
  //         scalable={true}
  //         containerStyle={{left:ITEM_DRAGABLE_POSITION, width:100, position:'absolute'}}
  //         containerChildStyle={{borderWidth:1, borderColor:this.state.selected ? 'red' : '#00000000'}}
  //         onChangeStyle={(event, styles)=> {this.setState({
  //           styles
  //         })}}
  //         onPresIn={()=> { this.setState({selected: !this.state.selected})}}>
  //         <Image
  //           resizeMode='contain'
  //           style={{height:100, width:100}}
  //           source={{uri:'https://static.wixstatic.com/media/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png/v1/crop/x_0,y_0,w_1433,h_1418/fill/w_334,h_332,al_c,usm_0.66_1.00_0.01/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png'}}/>
  //       </CustomGestures>
  //       <View style={{height, width, position:'absolute'}}>
  //       {
  //         multipleTextDragable.texts.map((obj,i) => {
  //           return (
  //             <View style={{left:CENTER_X_POSISITION_TEXT, top: CENTER_Y_POSISITION_TEXT}}>
  //             <NoCustomGestures
  //               key={i}
  //               containerStyle={{width:obj.isDeleted ? 0 : obj.fontLength, position:'absolute' ,top:obj.top, left:obj.left}}
  //               containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? '#ffffff00' : '#ffffff00'}}>
  //                 <Text style={{padding:5, fontFamily: obj.fontFamily, fontSize: obj.fontSize, color:obj.fontColor}}>
  //                   {obj.text}
  //                 </Text>
  //             </NoCustomGestures>
  //             </View>
  //           )
  //         })
  //       }
  //       </View>
  //       <View style={{height, width, position:'absolute'}}>
  //       {
  //         multipleTextDragable.texts.map((obj,i) => {
  //           return (
  //             <View style={{left:CENTER_X_POSISITION_TEXT, top: CENTER_Y_POSISITION_TEXT}}>
  //             <CustomGestures
  //               key={i}
  //               containerStyle={{width:obj.isDeleted ? 0 : obj.fontLength, position:'absolute'}}
  //               containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? 'red' : '#ffffff00'}}
  //               onChangeStyle={(event, styles)=> {
  //                 let { left, top } = styles
  //                 this.props.onChangePosition({ left, top, activeIndex:i })
  //                 // this.setState({
  //                 //   styles
  //                 // })
  //               }}
  //               onPressIn={()=>{ this.props.changeObjectClicked(i)}}
  //               onPress={()=> {}}>
  //                 <Text style={{padding:5, fontFamily: obj.fontFamily, fontSize: obj.fontSize, color:obj.fontColor, opacity:0}}>
  //                   {obj.text}
  //                 </Text>
  //             </CustomGestures>
  //             </View>
  //           )
  //         })
  //       }
  //       </View>
  //
  //     </View>
  //   );
  // }
}
//
// const mapDispatchToProps = ( dispatch ) => {
//   const onChangePosition = ({left, top, activeIndex}) => dispatch({type:'CHANGE_POSITION', payload:{left, top, activeIndex}})
//   const changeObjectClicked = (payload) => dispatch({type:'CHANGE_OBJECT_CLICKED', payload})
//   return {
//     onChangePosition,
//     changeObjectClicked
//   }
// }
//
// const mapStateToProps = (state) => {
//   // console.log(state);
//   const { multipleTextDragable } = state
//   return {
//     multipleTextDragable
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(DesignBody)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
