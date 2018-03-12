import { NavigationActions } from 'react-navigation'
import AppNavigator from '../../navigations/routes'
import { getCurrentRouteName, getActionRouteName } from '../../utils'


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Designs'));

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  const { type } = action;
  if (type === NavigationActions.NAVIGATE) {
    // Return current state if no routes have changed
    if (getActionRouteName(action) === getCurrentRouteName(state)) {
        return state;
    }
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
