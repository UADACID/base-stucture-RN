/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
import { AppColor } from '../utils'


export default class CustomNavbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={[{backgroundColor:AppColor}]} androidStatusBarColor={AppColor}>
          <Left>
            {this.props.leftComponent}
          </Left>
          <Body>
            <Title style={{color:'#fff'}}>{this.props.title}</Title>
          </Body>
          <Right>
            {this.props.rightComponent}
          </Right>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
