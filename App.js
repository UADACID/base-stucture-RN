/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigations/root'
import store from './src/store'

export default class App extends Component<Props> {
  componentDidMount(){
    console.log(store.getState);
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
