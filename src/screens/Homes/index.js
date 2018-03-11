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

export default class Homes extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <CustomCarousel/>
          <Categories title={'Design Categories'}/>
          <Brand title={'Brands'}/>
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
