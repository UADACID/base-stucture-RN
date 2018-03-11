/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window')

const CustomCarousel = (props) => (
  <View>
    <Carousel
      ref={(c) => { this._carousel = c; }}
      data={[{title:'aji'},{title:'ikka'},{title:'alfin'},{title:'dea'}]}
      renderItem={_renderItem}
      sliderWidth={width}
      itemWidth={width}
      loop={true}
      autoplay={true}
      autoplayInterval={2000}
    />
    { this.pagination }
  </View>
);

const _renderItem = ({item, index}) => {
    return (
        <View style={{width:width}}>
            <Image
              resizeMode='cover'
              style={{width, height:200}}
              source={{uri:'http://www.tshirt-factory.com/images/promo/34/Online-Tshirt-Designer-Slider-Site-v214987382955954ee770e93f.jpg'}}
            />
        </View>
    );
}

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
