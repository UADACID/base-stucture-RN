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
      data={dummy}
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
              source={{uri:item.uri}}
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

const dummy = [
  {
    id:1,
    uri:'http://www.tshirt-factory.com/images/promo/34/Online-Tshirt-Designer-Slider-Site-v214987382955954ee770e93f.jpg'
  },
  {
    id:2,
    uri:'https://i.pinimg.com/originals/2f/28/24/2f282498e08bf57bc309f436bb9b1ee0.jpg'
  },
  {
    id:3,
    uri:'https://ae01.alicdn.com/kf/HTB1FdEBQXXXXXaTXpXXq6xXFXXXS/New-kayu-berbingkai-siap-untuk-menggantung-nordic-simple-abstrak-wall-art-hd-canvas-print-untuk-ruang.jpg_640x640q90.jpg'
  },
]
