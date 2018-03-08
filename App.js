/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  YellowBox,
  NetInfo,
  BackHandler
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationActions } from 'react-navigation'
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
    NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);
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
    return (
      <View style={{flex:1}}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </View>
    );
  }
}
