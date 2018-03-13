/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Picker, Item as FormItem } from "native-base";
const Item = Picker.Item;

class CourierDescription extends Component {

  checkStringDay = (string) => {
    const checking = string.includes("HARI");
    if (checking) {
      return string
    }else{
      return string +' HARI'
    }
  }

  onValueChange(value: string) {
    this.props.onSelectedService(value)
    // this.props.onSelectedProvinces(value)
    // this.getCities(value)
  }

  render() {
    const { costs , serviceSelected} = this.props

    if (costs == null) {
      return (
        <View style={[styles.container,{justifyContent:'center', alignItems:'center', margin:20}]}>
          <Text>Anda belum memilih kurir</Text>
        </View>
      );
    }

    if (costs.length == 0) {
      return (
        <View style={[styles.container,{justifyContent:'center', alignItems:'center', margin:20}]}>
          <Text>Pengiriman tidak tersedia</Text>
        </View>
      );
    }
    return (
      <View style={[styles.container, {marginTop:20}]}>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={serviceSelected}
          onValueChange={this.onValueChange.bind(this)}>
          <Item label="Pilih Paket" value="0" />
          {costs.map((obj, i) => {
            const etd = this.checkStringDay(obj.cost[0].etd)
              const label = `${obj.description}_${etd}_${obj.cost[0].value}`
              return (
                <Item key={i} label={label} value={label} />
              )
            })
          }
        </Picker>
      {/*costs.map((obj,i) => {
        return (
          <View key={i} style={{flexDirection:'row', justifyContent:'space-between', margin:5}}>
            <Text>{obj.description}</Text>
            <Text>{this.checkStringDay(obj.cost[0].etd)}</Text>
            <Text>Rp. {obj.cost[0].value}</Text>
          </View>
        )
      })*/}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSelectedService : (payload) => {
    dispatch({type:'ON_SELECTED_SERVICE', payload})
  }
})

export default connect(null, mapDispatchToProps)(CourierDescription)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
  },
});
