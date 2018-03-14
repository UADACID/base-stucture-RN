/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { Content, Button, Icon, List, ListItem, } from 'native-base'

export default class ListAddress extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Choose Shipping Address`,
    headerLeft:(
      <Button
        onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
        style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </Button>)
  })



  render() {

    const { address } = this.props
    return (
      <View style={styles.container}>
        <Content>
          {address.map((obj,i) => {
            return (
              <ListItem key={i} style={{marginLeft:0}} onPress={()=>this.props.onChangeDefaultAddress(i)}>
                <View style={styles.addressHeader}>
                  <Text style={[{fontWeight:'bold', fontSize:17},styles.textDistance]}>{obj.label}</Text>
                  <Text style={styles.textDistance}>{obj.as_name}</Text>
                  <Text style={styles.textDistance}>{obj.detail_address}</Text>
                  <Text style={[styles.textDistance,{marginTop:7, marginBottom:7}]}>{obj.phone_number}</Text>
                </View>
              </ListItem>
            )
          })}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  addressHeader : {
    paddingLeft: 20,
    paddingRight: 20
  },
  textDistance : {
    marginTop: 2,
    marginBottom: 2
  }
});
