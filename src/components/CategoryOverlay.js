/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux'
import Categories from '../screens/Homes/components/Categories'
import CustomCircleButton from './CustomCircleButton'
import CustomAnimatedForCategory from './CustomAnimatedForCategory'

const CategoryOverlay = (props) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={props.categoryOverlay}
    onRequestClose={() => {
      props.dispatch({type:'HIDE_CATEGORY_OVERLAY'})
    }}>
    <TouchableNativeFeedback onPress={()=> props.dispatch({type:'HIDE_CATEGORY_OVERLAY'})}>
      <View style={[styles.container]}>

          <View style={styles.containerBody}>
            <CustomAnimatedForCategory>
              <Categories />
            </CustomAnimatedForCategory>
          </View>
          <View style={styles.containerFooter}>
            <Image
              style={{height:40, width:40, transform:[{rotateY:'180deg'}]}}
              resizeMode='contain'
              source={require('../../assets/cone.png')}/>
          </View>

        <CustomCircleButton from='modal'/>
      </View>
    </TouchableNativeFeedback>
  </Modal>
);

const mapStateToProps = state => {
  return {
    categoryOverlay : state.categoryOverlay
  }
}

export default connect(mapStateToProps)(CategoryOverlay);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0203048f'
  },
  containerBody : {
    position:'absolute',
    bottom: 100,
    right:0,
    transform:[{scale:.9}]
  },
  containerFooter : {
    position:'absolute',
    right:60, bottom:77
  }
});
