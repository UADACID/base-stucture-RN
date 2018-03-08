import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { connect } from 'react-redux';

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
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  }
};

export default AppWithNavigationState = connect(mapStateToProps)(App);
