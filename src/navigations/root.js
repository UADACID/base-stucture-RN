import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { View } from 'react-native'
import CustomCircleButton from '../components/CustomCircleButton'
import CategoryOverlay from '../components/CategoryOverlay'
import RootNavigation from './routes'

const AppNavigator = RootNavigation


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const NavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {

  render() {
    const routeName = this.props.nav.routes[0].routeName
    return (
      <View style={{flex:1}}>
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })} />
        {this.props.nav.index == 0 && this.props.nav.routes.length == 1 ?
        (routeName == 'Splash' ? false : <CustomCircleButton />) : false}
        <CategoryOverlay />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  }
};

export default AppWithNavigationState = connect(mapStateToProps)(App);
