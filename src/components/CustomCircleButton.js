/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base'
import { connect } from 'react-redux'

class CustomCircleButton extends Component {

  render() {
    const { showCategoryOverlay, hideCategoryOverlay, from } = this.props
    const actionPress = from == 'modal' ? hideCategoryOverlay : showCategoryOverlay
    let rotate = from == 'modal' ? {rotate:'45deg'} : {rotate:'0deg'}
    return (
      <View style={{position:'absolute', bottom:0, right:0, width:80, height:80, borderRadius:60, backgroundColor:'#0073b2'}}>
        <View style={{height:80, width:80, borderRadius:40, backgroundColor:'#0073b2'}}>
          <TouchableOpacity activeOpacity={0.9} onPress={actionPress}>
            <View style={{justifyContent:'center', alignItems:'center', height:70, width:70, marginTop:5, marginLeft:5, borderRadius:50, backgroundColor:'#ffffff', transform:[rotate]}}>
              <Icon name="md-add" style={{fontSize:30, color:'#0073b2', }}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showCategoryOverlay : ()=> {
    dispatch({type:'SHOW_CATEGORY_OVERLAY'})
    dispatch({type:'HIDE_STARTUP_INFO_OVERLAY'})
  },
  hideCategoryOverlay : ()=> {
    dispatch({type:'HIDE_CATEGORY_OVERLAY'})
    dispatch({type:'HIDE_STARTUP_INFO_OVERLAY'})
  }
})

export default connect(null, mapDispatchToProps)(CustomCircleButton)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
