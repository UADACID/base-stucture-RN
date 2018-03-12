/* @flow */

import React, { Component } from 'react';
import {
  View,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import { Icon, Text } from 'native-base'
import SizeList from './components/sizeList'

const { width, height } = Dimensions.get('window')
const IMAGE_EXAMPLE = 'https://ctl.s6img.com/society6/img/KEdBoNFIvb24c6R2GQ6wNHWL9Qc/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-0052/a/22341997_15077765/~~/copper-and-midnight-navy-pillows.jpg'
const closeImage = '../../../../assets/carts/x-button.png'
const arrowImage = '../../../../assets/carts/arrow-down.png'


class CartListItem extends Component {

  onRemovePress = (index) => {

    Alert.alert(
      '',
      'Are you sure ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.props.removeOrder(index)},
      ],
      { cancelable: false }
    )
  }

  render() {
    let filterImageBody = []

    if (this.props.images) {
      filterImageBody = this.props.images.filter(image => image.key.includes('modelBody'))
    }

    let image = filterImageBody.length == 0 ? '' : filterImageBody[0]
    // console.log(image);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <Image
              resizeMode='contain'
              style={{height:80, width:80}}
              source={{uri:image.uri}}/>
          </View>
          <View style={{width:width-105, flexDirection:'row'}}>
            <View>
              <Text style={{padding:10}}>{this.props.title}</Text>
              <Text note style={{padding:10}}>@ Rp {this.props.price} - {this.props.totalPrice}</Text>
            </View>
            <TouchableOpacity
              onPress={()=>this.onRemovePress(this.props.index)}
              style={styles.iconRemoveContainer}>
              <Image
                style={{height:20, width:20}}
                source={require(closeImage)}/>
            </TouchableOpacity>
            {/*<TouchableOpacity style={styles.iconArrowContainer}>
              <Text style={{marginRight:10, color:'#0073b2'}}>SIZE</Text>
              <Image
                style={{height:20, width:20}}
                source={require(arrowImage)}/>
            </TouchableOpacity>*/}
          </View>
        </View>
        <SizeList {...this.props}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeOrder:(payload)=> dispatch({type:"REMOVE_ORDER", payload})
})

export default connect(null, mapDispatchToProps)(CartListItem)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderBottomWidth: 0.5,
    borderColor: '#b6b6b6'
  },
  top:{
    flexDirection: 'row',
  },
  iconRemoveContainer:{
    position: 'absolute',
    right: 0,
    padding: 5
  },
  iconArrowContainer:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 5
  }
});
