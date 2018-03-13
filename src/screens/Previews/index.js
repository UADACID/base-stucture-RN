/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Button, Card, CardItem, Content, Footer } from 'native-base'

const { width, height } = Dimensions.get('window')

export default class Previews extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Preview',
  });

  onPressAddToCart = (additionalTotalCost) => {

    const { state } = this.props.navigation
    const { name } = this.props.modelName
    const { images, variantSelected } = state.params
    const { qtySizeS, qtySizeM, qtySizeL, qtySizeXL, qtySizeXXL, price } = variantSelected

    // alert(JSON.stringify({ qtySizeS, qtySizeM, qtySizeL, qtySizeXL, qtySizeXXL, price, additionalTotalCost, name }))
    const payload = {
      title:name,
      images,
      qtySizeS,
      qtySizeM,
      qtySizeL,
      qtySizeXL,
      qtySizeXXL,
      valueOfSizeS:0,
      valueOfSizeM:0,
      valueOfSizeL:0,
      valueOfSizeXL:0,
      valueOfSizeXXL:0,
      price:additionalTotalCost,
      totalPrice:0
    }

    this.props.addToCart(payload)
    this.props.toScreen('Carts')
  }

  renderSize({sizeName, sizeLenght}){
    if (sizeLenght == 0) {
      return (
        <View />
      )
    }else{
      return (
        <View style={styles.size}>
          <Text style={{color:'#ffffff'}}>{sizeName}</Text>
        </View>
      )
    }
  }

  filterItemAdapter(array, key){
    return array.filter(obj => obj.key.includes(key) == true)
  }

  render(){
    const { state } = this.props.navigation
    const { images, variantSelected } = state.params
    // console.log(this.props.productModels);
    // const filte  rModelName = this.props.productModels.filter(model => model.id == variantSelected.modelId)
    // const modelName = filterModelName[0]

    console.log({ images, variantSelected });
    const { qtySizeS, qtySizeM, qtySizeL, qtySizeXL, qtySizeXXL, price } = variantSelected
    console.log('--------');
    console.log(variantSelected);

    const filterTextAttachment = this.filterItemAdapter(images,'text')
    const numberOfTextAttachment = filterTextAttachment.length
    const additionalCostOfText = numberOfTextAttachment * 10000

    const filterImageAttachment = this.filterItemAdapter(images,'image')
    const numberOfImageAttachment = filterImageAttachment.length
    const additionalCostOfImage = numberOfImageAttachment * 15000

    const additionalTotalCost = price + additionalCostOfText + additionalCostOfImage


    const filterImage = this.filterItemAdapter(images,'modelBody')
    const imageBody = filterImage[0]

    return(
      <View style={styles.container}>
        <Content>
          <View>
            <Card>
              <Image
                resizeMode='contain'
                style={{width, height:width, marginTop:20, marginBottom:20}}
                source={{uri:imageBody.uri}}
              />
            </Card>
          </View>
          <Card>
            <CardItem header>
              <Text style={{fontWeight:'bold', alignSelf:'center', fontSize:15}}>{this.props.modelName.name}</Text>
            </CardItem>
          <View>
            <Text style={{alignSelf:'center'}}>
              SIZE AVAILABLE
            </Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              {this.renderSize({sizeName:'S', sizeLenght: qtySizeS})}
              {this.renderSize({sizeName:'M', sizeLenght: qtySizeM})}
              {this.renderSize({sizeName:'L', sizeLenght: qtySizeL})}
              {this.renderSize({sizeName:'XL', sizeLenght: qtySizeXL})}
              {this.renderSize({sizeName:'XXL', sizeLenght: qtySizeXXL})}
            </View>
          </View>
          <View>
            <Text style={{alignSelf:'center', color:'#000', padding:10}}>
              Rp. {additionalTotalCost}
            </Text>
          </View>
          </Card>
        </Content>
        <Footer style={{backgroundColor:'#ffffff'}}>
        <Button style={styles.button} onPress={()=>this.onPressAddToCart(additionalTotalCost)}>
          <Text style={{fontWeight:'100', fontSize:20, color:'#fff'}}>
            ADD TO CART
          </Text>
        </Button>
        </Footer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button : {
    position: 'absolute',
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
    backgroundColor: '#0073b2'
  },
  size : {
    backgroundColor:'#f7355d',
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    margin:10
  }
});

// /* @flow */
//
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   Platform,
//   Dimensions,
//   StyleSheet,
//   TouchableNativeFeedback
// } from 'react-native';
// import { Icon, Button, Content, Footer } from 'native-base'
// import { NavigationActions } from 'react-navigation'
//
// import Frame from './components/Frame'
//
// const { width, height } = Dimensions.get('window')
//
// export default class Previews extends Component {
//
//   static navigationOptions = ({ navigation }) => ({
//     title: `Previews`,
//     headerLeft:(
//       <TouchableNativeFeedback onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}>
//         <View
//           style={{height:55, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
//           <Icon name='ios-arrow-back' style={{color:'#000'}}/>
//         </View>
//       </TouchableNativeFeedback>)
//   })
//
//   componentDidMount(){
//     const setParamsAction = NavigationActions.setParams({
//       params: { title: 'Hello' },
//       key: 'TabHome',
//     });
//     this.props.navigation.dispatch(setParamsAction);
//   }
//
//   onCheckoutPress = () => {
//     const resetAction = NavigationActions.reset({
//       index: 1,
//       actions: [
//         NavigationActions.navigate({ routeName: 'TabHome' }),
//         NavigationActions.navigate({ routeName: 'Carts' }),
//       ],
//     });
//     this.props.navigation.dispatch(resetAction);
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         {/*<Text  onPress={this.onCheckoutPress}>I'm the Previews component</Text>*/}
//         {/*<View style={styles.background}>
//           <View style={styles.top}>
//           </View>
//           <View style={styles.bottom}>
//           </View>
//         </View>*/}
//         <Frame />
//         <Footer style={{backgroundColor:'#ffffff', height:50}}>
//           <Button style={styles.button} onPress={this.onCheckoutPress}>
//             <Text style={{fontWeight:'100', fontSize:20}}>
//               ADD TO CART
//             </Text>
//           </Button>
//         </Footer>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   background : {
//     position: 'absolute',
//     height,
//     width
//   },
//   top:{
//     height: height / 2,
//     backgroundColor: '#fff'
//   },
//   bottom: {
//     height: height / 2,
//     backgroundColor: '#0073b2'
//   },
//   button : {
//     position: 'absolute',
//     width: width,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     bottom:0,
//     backgroundColor: '#dae9ef'
//   },
// });
