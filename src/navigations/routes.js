import React , { Component } from 'react'
import { View, Text, ActivityIndicator, Easing, Animated, Platform, TouchableNativeFeedback, Dimensions } from 'react-native'
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation'
import { Icon, Button } from 'native-base'
// import IconBadge from 'react-native-icon-badge';

//components
import CustomTitle from '../components/customTitle'
import BadgeButton from '../components/BadgeButton'
//tab home
import Homes from '../containers/Homes'
import Settings from '../containers/Settings'
import Notifications from '../containers/Notifications'

//root
import Splash from '../containers/Splash'
import Models from '../containers/Models'
import Designs from '../containers/Designs'
import Previews from '../containers/Previews'
import Carts from '../containers/Carts'
import Transactions from '../containers/Transactions'
import Payments from '../containers/Payments'
import PaymentDetails from '../containers/PaymentDetails'
import Logins from '../containers/Logins'
import Registers from '../containers/Registers'
import ListAddress from '../containers/ListAddress'

const { width, height } = Dimensions.get('window')

const Test = (props) => (
  <View>
    <Text onPress={()=> {
      // props.navigation.navigate('TabHome')
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'TabHome' }),
          NavigationActions.navigate({
            routeName: 'TabHistory' ,
            action: NavigationActions.navigate({ routeName: 'TabH2' }),
          }),
        ],
      });
      props.navigation.dispatch(resetAction);
    }}>Menunggu Rilis</Text>
  </View>
)


const TabHistory = TabNavigator({
  Pending : {
    screen : Test
  },
  Completed : {
    screen : Test
  }
},{
  tabBarPosition : 'top',
  backBehavior : 'none',
  tabBarOptions: {
    indicatorStyle : {
      backgroundColor : '#ffffff'
    },
    style: {
      backgroundColor: '#0073b2',
    },
  }
})

const TabHome = TabNavigator({
  HomeTab : {
    screen : Homes,
    navigationOptions: ({ navigation }) => ({
      title: `Home`,
      tabBarIcon: ({ tintColor }) => <Icon ios='ios-home' android="ios-home" style={{fontSize: 25, color: tintColor}}/>
    }),
  },
  NotificationTab: {
    screen : Notifications,
    navigationOptions: ({ navigation }) => ({
      title: `Notifications`,
      tabBarIcon: ({ tintColor }) => <Icon ios='ios-notifications' android="ios-notifications" style={{fontSize: 25, color: tintColor}}/>
    }),
  },
  SettingTab: {
    screen : Settings,
    navigationOptions: ({ navigation }) => ({
      title: `Settings`,
      tabBarIcon: ({ tintColor }) => <Icon ios='ios-cog' android="ios-cog" style={{fontSize: 25, color: tintColor}}/>
    }),
  },
},{
  tabBarPosition : 'bottom',
  swipeEnabled : false,
  // initialRouteName :'NotificationTab'
  animationEnabled : false ,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    indicatorStyle : {
      backgroundColor : '#446CB3'
    },
    style: {
      backgroundColor: '#0073b2',
      paddingRight: 100
    },
  }
})


const RootNavigation = StackNavigator({
  Splash : {
    screen : Splash,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Logins : {
    screen : Logins,
  },
  Registers : {
    screen : Registers
  },
  Models : {
    screen : Models
  },
  Designs : {
    screen : Designs
  },
  Previews : {
    screen : Previews
  },
  Carts : {
    screen : Carts
  },
  Transactions: {
    screen : Transactions
  },
  ListAddress : {
    screen : ListAddress
  },
  Payments : {
    screen : Payments,
    navigationOptions: ({ navigation }) => ({
      title: `Payments`,
      gesturesEnabled: true
    }),
  },
  PaymentDetails : {
    screen : PaymentDetails,
    navigationOptions: ({ navigation }) => ({
      title: `PaymentDetails`,
      gesturesEnabled: true
    }),
  },
  TabHome : {
    screen : TabHome,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <CustomTitle title='Fifilio'/>,
      // headerRight:(<View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
      //               <IconBadge
      //                 MainElement={
      //                   <View style={{
      //                     width:50,
      //                     height:50,
      //                     margin:6,
      //                     justifyContent:'center',
      //                     alignItems:'center'
      //                   }}>
      //                     <TouchableOpacity style={{paddingRight:15}}><Icon name='ios-swap'/></TouchableOpacity>
      //                   </View>
      //                 }
      //                 BadgeElement={
      //                   <Text style={{color:'#FFFFFF'}}>2</Text>
      //                 }
      //                 IconBadgeStyle={
      //                   {width:30,
      //                   height:30,
      //                   backgroundColor: 'red'}
      //                 }
      //                 Hidden={false}
      //                 />
      //             </View>),
      headerRight:(
        <View style={{flexDirection:'row'}}>
          <TouchableNativeFeedback onPress={()=> {
            // navigation.navigate('TabHistory')
            const resetAction = NavigationActions.reset({
              index: 1,
              actions: [
                NavigationActions.navigate({ routeName: 'TabHome' }),
                NavigationActions.navigate({
                  routeName: 'TabHistory' ,
                  action: NavigationActions.navigate({ routeName: 'Pending' }),
                }),
              ],
            });
            navigation.dispatch(resetAction);
          }}>
            <View
              style={{height:55, height:55, paddingRight:10, width:40, justifyContent:'center', alignItems:'center', backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}><Icon name='md-swap' style={{color:'#000'}}/>
            </View>
          </TouchableNativeFeedback>
          <BadgeButton iconName='ios-cart'/>
        </View>
      ),
      headerTitleStyle:{
        fontWeight:'100'
      }
    }),
  },
  TabHistory : {
    screen : TabHistory,
    navigationOptions: ({ navigation }) => ({
      title: `Transaction History`,
      headerLeft:(
        <Button
          onPress={()=> navigation.dispatch({type:'Navigation/BACK'})}
          style={{height:55, backgroundColor:Platform.OS == 'ios' ? '#ffffff00' : '#fff'}}>
          <Icon name='ios-arrow-back' style={{color:'#000'}}/>
        </Button>),
    }),
  }
},{
  headerMode:'float',
  initialRouteName:'Splash',
  navigationOptions :  ({ navigation }) => ({
    headerTitleStyle:{
      fontWeight:'100'
    },
  })
  // transitionConfig: () => ({
  //     transitionSpec: {
  //       duration: 300,
  //       easing: Easing.out(Easing.poly(4)),
  //       timing: Animated.timing,
  //     },
  //     screenInterpolator: sceneProps => {
  //       const { layout, position, scene } = sceneProps;
  //       const { index } = scene;
  //
  //       const width = layout.initWidth;
  //       const translateX = position.interpolate({
  //         inputRange: [index - 1, index, index + 1],
  //         outputRange: [width, 0, 0],
  //       });
  //
  //       const opacity = position.interpolate({
  //         inputRange: [index - 1, index - 0.99, index],
  //         outputRange: [0, 1, 1],
  //       });
  //
  //       return { opacity, transform: [{ translateX }] };
  //     },
  //   }),
})

export default RootNavigation
