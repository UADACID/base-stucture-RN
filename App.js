/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  YellowBox,
  NetInfo,
  BackHandler,
} from 'react-native';
import { Provider } from 'react-redux';
import { Icon } from 'native-base'
import { NavigationActions } from 'react-navigation'

import ModalOverlay from './src/components/ModalOverlay'
import RootNavigation from './src/navigations/root'
import store from './src/store'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends Component<Props> {

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
    NetInfo.isConnected.fetch().done(
      (isConnected) => {
        const { dispatch } = store;
        dispatch({type:'IS_CONNECTED', payload:isConnected})
      }
    );
  }

  componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  handleConnectionChange = (isConnected) => {
          const { dispatch } = store;
          dispatch({type:'IS_CONNECTED', payload:isConnected})
  }

  onBackPress = () => {
    const { dispatch } = store;
    const { nav } = store.getState()
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const {modalOverlay, nav} = store.getState()
    console.log(nav);
    const filterNavigationForTabHome = nav.routes.length
    console.log(filterNavigationForTabHome);
    return (
        <Provider store={store}>
          <View style={{flex:1}}>
            <RootNavigation />
            <ModalOverlay/>
          </View>
        </Provider>
    );
  }
}
