import { NavigationActions } from 'react-navigation'
const hasProp = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export const  getCurrentRouteName = (nav) => {
  if (!hasProp(nav, 'index') || !hasProp(nav, 'routes')) return nav.routeName;
  return getCurrentRouteName(nav.routes[nav.index]);
}

// Gets the destination route name
export const getActionRouteName = (action) => {
  const hasNestedAction = Boolean(
    hasProp(action, 'action') && hasProp(action, 'type') && typeof action.action !== 'undefined',
  );

  const nestedActionWillNavigate = Boolean(hasNestedAction && action.action.type === NavigationActions.NAVIGATE);

  if (hasNestedAction && nestedActionWillNavigate) {
    return getActionRouteName(action.action);
  }

  return action.routeName;
}
