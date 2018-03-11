/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { icons } from '../../../../assets/categories/icons.js'

const { width, height } = Dimensions.get('window')

class Categories extends Component {

  handlePressCategory = (id) => {
    this.props.hideModal()
    this.props.toScreen({routeName:'Models', passProps:{categoryId:id}})
  }

  _keyExtractor = (item, index) => index;

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.handlePressCategory}>
        <Image
          style={{width:width/4, height:width/4}}
          source={item.uri}/>
      </TouchableOpacity>
    )
  }

  render() {
    const { categories } = this.props
    return (
      <View style={styles.container}>
        <Text style={{padding:this.props.title? 10 : 0, paddingLeft:this.props.title ? 20 : 0}}>{this.props.title}</Text>
        <FlatList
          data={icons}
          horizontal={false}
          numColumns={4}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          scrollEnabled={false}
          />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {dispatch({type:'HIDE_MODAL'})},
    toScreen: ({routeName, passProps})=>{
      dispatch(NavigationActions.navigate({ routeName: routeName }))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    categories : state.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

const styles = StyleSheet.create({
  container: {
  },
});
