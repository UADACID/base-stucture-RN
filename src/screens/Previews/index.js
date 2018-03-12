/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { Icon, Button, Content, Footer } from 'native-base'
import { NavigationActions } from 'react-navigation'

import Frame from './components/Frame'

const { width, height } = Dimensions.get('window')

export default class Previews extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Previews`,
    headerLeft:(
      <TouchableNativeFeedback onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}>
      <View
        style={{height:55, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
        <Icon name='ios-arrow-back' style={{color:'#000'}}/>
      </View>
      </TouchableNativeFeedback>)
  })

  componentDidMount(){
    const setParamsAction = NavigationActions.setParams({
      params: { title: 'Hello' },
      key: 'TabHome',
    });
    this.props.navigation.dispatch(setParamsAction);
  }

  onCheckoutPress = () => {
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabHome' }),
        NavigationActions.navigate({ routeName: 'Carts' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text  onPress={this.onCheckoutPress}>I'm the Previews component</Text>*/}
        <View style={styles.background}>
          <View style={styles.top}>
          </View>
          <View style={styles.bottom}>
          </View>
        </View>
        <Frame />
        <Footer style={{backgroundColor:'#ffffff', height:50}}>
          <Button style={styles.button} onPress={this.onCheckoutPress}>
            <Text style={{fontWeight:'100', fontSize:20}}>
              ADD TO CART
            </Text>
          </Button>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6'
  },
  background : {
    position: 'absolute',
    height,
    width
  },
  top:{
    height: height / 2,
    backgroundColor: '#fff'
  },
  bottom: {
    height: height / 2,
    backgroundColor: '#0073b2'
  },
  button : {
    position: 'absolute',
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
    backgroundColor: '#dae9ef'
  },
});
