/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { NavigationActions } from 'react-navigation'

const { height, width } = Dimensions.get('window')

export default class Splash extends Component {

  componentDidMount(){
    setTimeout(()=>{
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'TabHome' ,
            // action : NavigationActions.navigate({ routeName:'NotificationTab' })
          }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }, 11000);
  }

  _renderItem = ({item, index}) => {
      return (
          <View style={{width:width}}>
              <Image
                resizeMode='cover'
                style={{width: width, height}}
                source={item.uri}
              />
          </View>
      )
    }

  handleGoToApp = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'TabHome' ,
          // action : NavigationActions.navigate({ routeName:'NotificationTab' })
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={dummy}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={width}
          loop={false}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
        />
        <View style={{position:'absolute', bottom:0, height:height/4, width, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={this.handleGoToApp}>
        <View style={{padding:20, borderWidth:1, borderRadius:5, borderColor:'#FFF'}}>
          <Text style={{color:'#fff'}}>MASUK SEKARANG</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const dummy = [
  {
    uri:require('../../../assets/splash/1.pilih_category.png')
  },
  {
    uri:require('../../../assets/splash/2.design.png')
  },
  {
    uri:require('../../../assets/splash/3.kirim.png')
  }
]
