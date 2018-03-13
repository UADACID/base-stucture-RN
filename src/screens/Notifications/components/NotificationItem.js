/* @flow */

import React, { Component } from 'react';
import {
  View,
  // Text,
  StyleSheet,
} from 'react-native';
import { ListItem, Thumbnail, Text, Body , Right, Icon} from 'native-base';

const uri = 'https://ctl.s6img.com/society6/img/-haQn4_iCtnPdur1YZn3KHdHbhw/w_700/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-0095/a/36700116_15678640/~~/soft-blue-gradient-cubes-36q-pillows.jpg'

export default class NotificationItem extends Component {
  render() {
    const iconColor = this.props.isRead ? '#0073b2' : 'gray'
    return (
      <View style={styles.container}>
          <ListItem>
            <Thumbnail square size={80} source={{ uri: this.props.uri }} />
            <Body>
              <Text>{this.props.title}</Text>
              <Text note>{this.props.description}</Text>
            </Body>
            <Right>
              <Icon name='ios-eye' style={{color:iconColor}}/>
            </Right>
          </ListItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
