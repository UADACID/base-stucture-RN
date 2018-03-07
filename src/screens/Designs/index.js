/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import { Icon, Button } from 'native-base'

export default class Designs extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Designs`,
    headerLeft:(
      <Button
        onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
        style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </Button>)
  })

  render() {
    return (
      <View style={styles.container}>
        <Text  onPress={()=> this.props.navigation.navigate('Previews')}>I'm the Designs component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
});
