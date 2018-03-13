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
// import SizeList from './components/sizeList'

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
    const { valueOfSizeS, valueOfSizeM, valueOfSizeL, valueOfSizeXL, valueOfSizeXXL, totalPrice } = this.props
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
          <View style={{justifyContent:'flex-start'}}>
            <View style={{width:width - 100}}>
              {valueOfSizeS == 0 ? false : <SizeItem size={'S'} value={valueOfSizeS}/>}
              {valueOfSizeM == 0 ? false : <SizeItem size={'M'} value={valueOfSizeM}/>}
              {valueOfSizeL == 0 ? false : <SizeItem size={'L'} value={valueOfSizeL}/>}
              {valueOfSizeXL == 0 ? false : <SizeItem size={'XL'} value={valueOfSizeXL}/>}
              {valueOfSizeXXL == 0 ? false : <SizeItem size={'XXL'} value={valueOfSizeXXL}/>}
              <Text style={{marginTop: 5, marginBottom: 5}}>Total : {totalPrice}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeOrder:(payload)=> dispatch({type:"REMOVE_ORDER", payload})
})

const SizeItem = (props) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Text>{`Size ${props.size}`}</Text>
      <Text style={{marginLeft:10}}>{props.value} pcs</Text>
    </View>
  )
}

export default connect(null, mapDispatchToProps)(CartListItem)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width - 40,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#b6b6b6'
  },
  top:{
    flexDirection: 'row',
    // justifyContent: 'space-around',
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
