import React , { Component } from 'react'
import { View, Text, ActivityIndicator  } from 'react-native'
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation'


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
    }}>Tes</Text>
  </View>
)

const TestHome = (props) => (
  <View>
    <Text onPress={()=> {
      props.navigation.navigate('Payment')
    }}>Tes Home</Text>
  </View>
)

/* @flow */
class Splash extends Component {

  componentDidMount(){
    // setTimeout(()=>{
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'TabHome' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    // }, 3000);
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator />
        <Text> waiting for redirect . . . </Text>
      </View>
    );
  }
}


const TabHistory = TabNavigator({
  TabH1 : {
    screen : Test
  },
  TabH2 : {
    screen : Test
  }
},{
  tabBarPosition : 'top'
})

const TabHome = TabNavigator({
  Tab1 : {
    screen : TestHome,
    navigationOptions: ({ navigation }) => ({
      title: `Fifilio`,
    }),
  },
  Tab2 : {
    screen : Test,
    navigationOptions: ({ navigation }) => ({
      title: `Settings`,
    }),
  }
},{
  tabBarPosition : 'bottom'
})


const RootNavigation = StackNavigator({
  Splash : {
    screen : Splash
  },
  Login : {
    screen : Test
  },
  Payment : {
    screen : Test,
    navigationOptions: ({ navigation }) => ({
      title: `Payment`,
    }),
  },
  TabHome : {
    screen : TabHome
  },
  TabHistory : {
    screen : TabHistory,
    navigationOptions: ({ navigation }) => ({
      title: `Transaction History`,
    }),
  }
},{
  headerMode:'float'
})

export default RootNavigation
