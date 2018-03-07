import {
  createStore,
  applyMiddleware,
} from 'redux';
import appReducer from './reducers'
import middleware from './middlewares'

export default store = createStore(
  appReducer,
  applyMiddleware(...middleware),
);
