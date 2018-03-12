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

const StartupInfo = (props) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={props.startupInfo}
    onRequestClose={() => {
      props.dispatch({type:'HIDE_STARTUP_INFO_OVERLAY'})
    }}>
    <TouchableNativeFeedback onPress={()=> props.dispatch({type:'HIDE_STARTUP_INFO_OVERLAY'})}>
      <View style={[styles.container]}>

          <View style={styles.containerBody}>
            <CustomAnimatedForCategory>
              <View style={styles.containerTextInfo}>
                <Text>
                  Click this button to Create Your Own Design
                </Text>
              </View>
            </CustomAnimatedForCategory>
          </View>
          <View style={styles.containerFooter}>
            <Image
              style={{height:40, width:40, transform:[{rotateY:'180deg'}]}}
              resizeMode='contain'
              source={require('../../assets/cone.png')}/>
          </View>

        <CustomCircleButton />
      </View>
    </TouchableNativeFeedback>
  </Modal>
);

const mapStateToProps = state => {
  return {
    startupInfo : state.startupInfo
  }
}

export default connect(mapStateToProps)(StartupInfo);

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0203048f'
  },
  containerBody : {
    position:'absolute',
    bottom: 105,
    right:0,
    transform:[{scale:.9}]
  },
  containerFooter : {
    position:'absolute',
    right:60, bottom:77
  },
  containerTextInfo : {
    height:50,
    paddingLeft:10,
    paddingRight:10,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#e0e0e0',
    borderRadius:5,
    backgroundColor:'#fff'
  }
});

// /* @flow */
//
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
// } from 'react-native';
//
// export default class StartupInfo extends Component {
//   render() {
//     return (
//       <View style={{position:'absolute', height:100, bottom:60, right:20}}>
//         <View style={{height:50, width:200, borderWidth:1, borderColor:'#e0e0e0', borderRadius:5, backgroundColor:'#fff'}}>
//
//         </View>
//         <View style={{position:'absolute', bottom: 10, right: 40, height:50, width:40}}>
//           <Image
//             style={{height:40, width:40, transform:[{rotateY:'180deg'}]}}
//             resizeMode='contain'
//             source={require('../../assets/cone.png')}/>
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
