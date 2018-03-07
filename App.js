/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  YellowBox
} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations/root'
import store from './src/store'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends Component<Props> {
  componentDidMount(){
    console.log(store.getState());
  }
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
