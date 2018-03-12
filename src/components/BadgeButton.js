/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux'
import { Icon } from 'native-base'
import IconBadge from 'react-native-icon-badge';

class BadgeButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={()=> this.props.dispatch({type:'Navigation/NAVIGATE', routeName:'Carts'})}>
          <View>
            <ComponentWithBadge iconName={this.props.iconName} size={this.props.size}/>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    size:state.orderReducer.length
  }
}

export default connect(mapStateToProps)(BadgeButton)

const ComponentWithBadge = (props) => {
  const isHiden = props.size == 0 ? true : false
  return (
    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center', marginRight:10}}>
      <IconBadge
        MainElement={
          <View style={{
            width:50,
            height:50,
            margin:6,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Icon name={props.iconName}/>
          </View>
        }
        BadgeElement={
          <Text style={{color:'#FFFFFF'}}>{props.size}</Text>
        }
        IconBadgeStyle={
          {width:30,
          height:30,
          backgroundColor: 'red'}
        }
        Hidden={isHiden}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
