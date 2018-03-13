/* @flow */

import React, { Component } from 'react';
import {
  View,
  // Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import { Container, Title, Content, Button, Icon, Text, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

import {shippingAction} from '../../../services/Shipping'
import Prices from './Prices';

class Address extends Component {

  componentDidMount(){
    this.getProvinces()
  }

  getProvinces = () => {
    const config = {
      method:'get',
      url:'https://api.rajaongkir.com/starter/province',
      headers: {
        'key': 'd7f6044973b4c30f3fe55a3916f12901'
      }
    }
    this.props.getProvinces(config)
  }

  getCities = (value) => {
    const config = {
      method:'get',
      url:`https://api.rajaongkir.com/starter/city?province=${value}`,
      headers: {
        'key': 'd7f6044973b4c30f3fe55a3916f12901'
      }
    }
    this.props.getCities(config)
  }

  onValueChange(value: string) {
    this.props.onSelectedProvinces(value)
    this.getCities(value)
  }

  onValueChange1(value: string) {
    this.props.onSelectedCity(value)
  }

  onPressCourier = (name) => {
    console.log(this.props.shipping.selectedCity);
    const config = {
      method:'post',
      url:`https://api.rajaongkir.com/starter/cost`,
      headers: {
        'key': 'd7f6044973b4c30f3fe55a3916f12901'
      },
      data : {
        origin:39,
        destination:2,
        weight:1000,
        courier:name.toLowerCase()
      }
    }

    this.props.onSelectedCourer({name, config})
  }

  fetch = (value) => {
    console.log(value);
    axios({
      method:'get',
      url:`https://api.rajaongkir.com/starter/city?province=${value}`,
      headers: {
        'key': 'd7f6044973b4c30f3fe55a3916f12901'
      }
    })
    .then((response)=>{
      const {results} = response.data.rajaongkir
      this.setState({
        cities : results
      })
    });
  }

  render() {
    const { courier, provinces, cities, prices, selectedProvince, selectedCity } = this.props.shipping
    console.log({ courier, provinces, cities, prices, selectedProvince, selectedCity });
    return (
      <Container>
        <Content>
          <Form>
            <Text>Propinsi</Text>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={selectedProvince}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="-" value="0" />
              {provinces.map((obj, i) => {
                return (
                  <Item key={i} label={obj.province} value={obj.province_id} />
                )
              })}
            </Picker>
            <Text>Kabupaten</Text>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={selectedCity}
              onValueChange={this.onValueChange1.bind(this)}>
              <Item label="-" value="0" />
              {cities.map((obj, i) => {
                  return (
                    <Item key={i} label={obj.type+' '+obj.city_name} value={obj.city_id} />
                  )
                })
              }
            </Picker>
          </Form>
          <View style={{padding:30}}>
            <Text style={{fontSize:30}}>{selectedProvince}</Text>
            <Text style={{fontSize:30}}>{selectedCity}</Text>
          </View>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity
              onPress={()=> this.onPressCourier('JNE')}
              style={{flex:1, backgroundColor: courier == 'JNE' ? '#b6b6b6' : '#fff' ,margin:10, padding:20, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
              <Text>JNE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> this.onPressCourier('POS')}
              style={{flex:1, backgroundColor: courier == 'POS' ? '#b6b6b6' : '#fff' ,margin:10, padding:20, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
              <Text>POS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> this.onPressCourier('TIKI')}
              style={{flex:1, backgroundColor: courier == 'TIKI' ? '#b6b6b6' : '#fff' ,margin:10, padding:20, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
              <Text>TIKI</Text>
            </TouchableOpacity>
          </View>
          <Prices prices={prices}/>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    shipping : state.shipping
  }
}

const mapDispatchToProps = dispatch => ({
    getProvinces : (config)=> {
      const type = 'GET_PROVINCES'
      shippingAction({dispatch,config,type})
    },
    getCities : (config)=> {
      const type = 'GET_CITIES'
      shippingAction({dispatch,config,type})
    },
    onSelectedProvinces : (payload)=> dispatch({type:'ON_SELECTED_PROVINCE', payload}),
    onSelectedCity : (payload)=> dispatch({type:'ON_SELECTED_CITY', payload}),
    onSelectedCourer: ({name, config})=> {
      dispatch({type:'ON_SELECTED_COURER', payload:name})
      const type = 'GET_PRICES'
      shippingAction({dispatch,config,type})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Address)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
