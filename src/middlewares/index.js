import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger, { createLogger } from 'redux-logger';
import { NavigationMiddleware } from '../navigations/root'

const middleware = [];
if(__DEV__){ middleware.push(createLogger()) }
middleware.push(NavigationMiddleware)
middleware.push(thunk)
middleware.push(promise())

export default middleware;
