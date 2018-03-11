/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { Icon, Button, Content } from 'native-base'

import CustomListDesign from './components/CustomListDesign'
import CustomListPromote from './components/CustomListPromote'

export default class Models extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Choose Models`,
    headerLeft:(
      <TouchableNativeFeedback onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}>
      <View
        style={{height:55, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </View>
      </TouchableNativeFeedback>)
  })

  render() {
    return (
      <View style={styles.container}>
        <Content>
          {/*<Text onPress={()=> this.props.navigation.navigate('Designs')}>I'm the Models component</Text>*/}
          <CustomListDesign title='Create Your Own Design'/>
          <CustomListPromote title='Models Are Promoted'/>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
