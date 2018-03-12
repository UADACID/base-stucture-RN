/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

import CustomCarousel from './components/CustomCarousel'
import Categories from './components/Categories'
import Brand from './components/Brand'
import StartupInfo from '../../components/StartupInfo'

export default class Homes extends Component {

  componentDidMount(){
    // this.showInfo()
  }

  showInfo = () => {
    const info = true
    if (info) {
      setTimeout(()=> {
        this.props.showStartupInfo()
      }, 1000);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <CustomCarousel/>
          <Categories title={'Design Categories'}/>
          <Brand title={'Brands'}/>
          <StartupInfo />
        </ScrollView>
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
