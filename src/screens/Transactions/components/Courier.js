/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import CourierDescription from './CourierDescription'
import {shippingAction} from '../../../services/Shipping'

class Courier extends Component {

  getStyleBackground = (name) => {
    const { courier } = this.props.shipping
    if (courier == name) {
      return {
        backgroundColor : '#0073b2'
      }
    }

    return {}
  }

  getStyleColor = (name) => {
    const { courier } = this.props.shipping
    if (courier == name) {
      return {
        color : '#fff'
      }
    }

    return {}
  }

  onSelectedCourer = (name) => {
    // console.log('-----city name -----');
    // console.log(this.props.city_id);
    const config = {
      method:'post',
      url:`https://api.rajaongkir.com/starter/cost`,
      headers: {
        'key': 'd7f6044973b4c30f3fe55a3916f12901'
      },
      data : {
        origin:152,
        destination:this.props.city_id,
        weight:1000,
        courier:name.toLowerCase()
      }
    }
    this.props.onSelectedCourer({name, config})
  }

  render() {
    const { costs, serviceSelected } = this.props.shipping
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <Text style={{padding:10}}>Pilih Kurir</Text>
          <TouchableOpacity
            onPress ={()=>this.onSelectedCourer('jne')}
            style={[styles.button,this.getStyleBackground('jne')]}>
            <Text style={this.getStyleColor('jne')}>JNE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress ={()=>this.onSelectedCourer('pos')}
            style={[styles.button,this.getStyleBackground('pos')]}>
            <Text style={this.getStyleColor('pos')}>POS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress ={()=>this.onSelectedCourer('tiki')}
            style={[styles.button,this.getStyleBackground('tiki')]}>
            <Text style={this.getStyleColor('tiki')}>TIKI</Text>
          </TouchableOpacity>
        </View>
        <CourierDescription costs={costs} serviceSelected={serviceSelected} />
      </View>
    );
  }
}

const mapStateToProps = state => {

  const { addressReducer } = state
  const filterDefaultAddress = addressReducer.filter(obj => obj.is_selected == true)
  const defaultAddress = filterDefaultAddress[0].city_id
  return {
    shipping : state.shipping,
    city_id : defaultAddress
  }
}

const mapDispatchToProps = dispatch => ({
  // onSelectedCourer : (payload) => dispatch({type:'ON_SELECTED_COURER', payload})
  onSelectedCourer: ({name, config})=> {

    dispatch({type:'ON_SELECTED_COURER', payload:name})
    const type = 'GET_PRICES'
    shippingAction({dispatch,config,type})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Courier)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button : {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0073b2'
  }
});
