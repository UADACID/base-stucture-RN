/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  CameraRoll,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
var ImagePicker = require('react-native-image-picker');
import { Button, Icon } from 'native-base'

const { width, height } = Dimensions.get('window')
var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class ImagePhotos extends Component {

  state = {
    photos : []
  }

  componentDidMount(){
    this._handleButtonPress()
  }

  _handleButtonPress = () => {
   CameraRoll.getPhotos({
       first: 20,
       assetType: 'All',
     })
     .then(r => {
       // console.log(r);
       // console.log(r.edges);
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
       console.log(err);
        //Error Loading Images
     });
   };

  renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity onPress={()=>this.props.addNewImage({url:item.node.image.uri, type:'gallery'})}>
        <Image
           resizeMode='contain'
           style={{
             width: width/3.5,
             height: 100,
           }}
           source={{ uri: item.node.image.uri }}
         />
         </TouchableOpacity>
      </View>
    )
  }

  _keyExtractor = (item, index) => index;

  onOpenGalery = () => {
    ImagePicker.launchImageLibrary(options, (response)  => {
      // Same code as in above section!
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(source);
        this.props.addNewImage({url:source.uri, type:'gallery'})
      }
    });
  }


  render() {
    const { photos } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={photos}
          horizontal={true}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          />
        <TouchableOpacity onPress={this.onOpenGalery} style={styles.iconGridContainer}>
          <Icon name='md-grid' style={styles.iconGrid}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewImage:(payload)=> {
    dispatch({type:'ADD_NEW_IMAGE', payload})
    dispatch({type:'CLEAR_ALL_ACTIVE_TEXT'})
  }
})

export default connect(null,mapDispatchToProps)(ImagePhotos)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
    // flex: 1,
  },
  renderItem: {
    // backgroundColor: 'blue',
    padding: 0.2
  },
  iconGridContainer: {
    position:'absolute',
    backgroundColor:'#ffffffa3',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 17,
    bottom:10,
    left: 10,
    width: 35,
    height: 35
  },
  iconGrid :{
    color:'#444444',
    // backgroundColor:'#fff',
    fontSize: 20
  }
});
