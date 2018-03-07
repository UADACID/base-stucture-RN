import {
  combineReducers,
} from 'redux';
import { navReducer } from './navigator'


const appReducer = combineReducers({
  nav: navReducer,
});

export default appReducer
