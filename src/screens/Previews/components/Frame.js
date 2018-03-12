/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Content, Card, CardItem, Body, Icon, Left, Right } from 'native-base';

const { height, width } = Dimensions.get('window')


export default class Frame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Content>
          <Card style={{marginLeft:20, marginRight:20, marginTop:20}}>
            <CardItem style={styles.cardContainer}>
              <View style={{height:height / 1.7}}>
              </View>
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer : {
    paddingLeft:5,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:5
  },
});
