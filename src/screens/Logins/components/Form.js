/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Form, Item, Input, Label, Button, Header, Icon } from 'native-base';

const { width, height } = Dimensions.get('window')

class Forms extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=> this.props.dispatch({type:'Navigation/BACK'})}
          style={{padding:20, position:'absolute'}}>
          <Icon name='ios-arrow-back' style={{color:'#fff', fontSize:30}}/>
        </TouchableOpacity>
        <Form style={{marginTop:67}}>
          <Item floatingLabel>
            <Label style={{color:'#fff', fontWeight:'100'}}>Email</Label>
            <Input style={{color:'#fff'}}/>
          </Item>
          <Item floatingLabel>
            <Label style={{color:'#fff', fontWeight:'100'}}>Password</Label>
            <Input
              secureTextEntry={true}
              style={{color:'#fff'}}/>
          </Item>
        </Form>
        <Button style={styles.buttonLogin}>
          <Text style={{color:'#fff'}}>
            Sign In
          </Text>
        </Button>
        <View style={styles.footer}>
          <Text style={{paddingTop:10}}>don't have an account ? </Text>
          <TouchableOpacity
            onPress={()=>this.props.dispatch({type:'Navigation/NAVIGATE', routeName:'Registers'})}
            style={{paddingTop:10}}>
            <Text style={{color:'#7290c5'}}>Sign Up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(Forms)

const styles = StyleSheet.create({
  container: {
    width,
    height: height - 70,
    padding:20,
    // borderWidth: 5,
    paddingTop: 60
  },
  buttonLogin: {
    padding: 10,
    marginTop: 40,
    alignSelf: 'flex-end',
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 2,
    backgroundColor: '#0073b2',
    borderColor: '#fff'
  },
  footer : {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width
  }
});
