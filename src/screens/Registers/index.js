/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
} from 'react-native';
import { Content, Icon, Button } from 'native-base'

import CustomBackground from '../../components/CustomBackground'
import Form from './components/Form'

export default class Registers extends Component {

  static navigationOptions = ({ navigation }) => ({
    header : null
    // title: `Sign In to Fifilio`,
    // headerLeft:(
    //   <Button
    //     onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
    //     style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
    //     <Icon name='ios-arrow-back' style={{color:'#000'}}/>
    //   </Button>)
  })

  render() {
    const image = require('../../../assets/login/login_bg2.png')
    return (
      <View style={styles.container}>
        <CustomBackground image={image} rotate='30deg'/>
        <Content>
          {/*<Text onPress={()=> this.props.navigation.navigate('Registers')}>I'm the Logins component</Text>*/}
          <Form />
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
});
