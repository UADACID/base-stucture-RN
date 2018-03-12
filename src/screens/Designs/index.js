/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import { Icon, Button } from 'native-base'
import { takeSnapshot } from "react-native-view-shot";

import {DesignBody, DesignTab} from './components'

export default class Designs extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const func = () => alert('not yet');
    const onPreviewPress = params.onPreviewPress || func
    return {
      title: `Designs`,
      headerLeft:(
        <TouchableNativeFeedback onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}>
        <View
          style={{height:55, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
          <Icon name='ios-arrow-back' style={{color:'#000'}}/>
        </View>
        </TouchableNativeFeedback>),
      headerRight: (
          <Button transparent style={{paddingRight:10, height:55, paddingLeft:10}} onPress={onPreviewPress}>
            <Text style={styles.textHeaderRight}>PREVIEW</Text>
          </Button>
        ),
    }
  }

  componentWillMount() {
    this.props.navigation.setParams({ onPreviewPress: this.onPreviewPress });
  }

  onPreviewPress = () => {
  //   this.props.navigation.navigate('Previews')
  // return;
  const { modelVariants } = this.props
  const { activeId, variants } = modelVariants

  // console.log(variantSelected);
  // return
  this.props.showOverlay()
  this.props.clearBorder()
  setTimeout(()=>{
    let chidlRef = this.refs.abc.onGetRefs();
    let filterSelected = variants.filter(obj => obj.id == activeId)

    const variantSelected = filterSelected[0]
     // console.log(chidlRef);

     // console.log(this.refs.modelBody);
    chidlRef.modelBody = this.refs.modelBody
     // console.log(chidlRef);
     // return
    const filterRemoveRef = this.refAdapter(chidlRef)

    if (filterRemoveRef.length <= 1) {
      this.props.hideOverlay()
       return alert('you have not done the model design')
    }

     // console.log(filterRemoveRef);
    var promises = filterRemoveRef.map((ref) => {
          // //console.log(refSnapshot);
          return new Promise((resolve, reject) => {
            takeSnapshot(ref.value, {
              format: "png",
              quality: 0.3,
              result: "file",
            })
            .then(
              uri => {
                console.log('ke snapshot');
                resolve({
                  uri,
                  key:ref.key
                });

              },
              error => {
                console.log(err);
                reject();
              }
            );
        });
      });

      Promise.all(promises)
      .then(res => {
      console.log(res);
      this.props.hideOverlay()
      this.props.toScreen({routeName:'Previews', params:{images:res, variantSelected}})
      // return
        // const params = uri
        // this.props.toScreen({routeName:'Previews', params})

      })
      .catch(err => {
        // rejected(true)
      })
  }, 100);

}

  refAdapter = (payload) => {
    let arrayRefs = []
    // console.log(payload);
    for (var variable in payload) {
      if (payload.hasOwnProperty(variable)) {
        var str = variable;
        var n = str.includes("remove");
        if (!n) {
          // console.log(payload[variable]);
          arrayRefs.push({key:variable,value:payload[variable]})
        }
      }
    }

    return arrayRefs
  }

  render() {
      return (
        <View style={styles.container}>
          <View ref="modelBody" collapsable={false}>
            <DesignBody ref='abc'/>
          </View>
          <DesignTab />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
