import {
  combineReducers,
} from 'redux';
import { navReducer } from './navigator'
import { connectivity } from './connectivity'
//DESIGNS
import {
  activeTabBottom, activeSubTabButtom,
  textMenu, multipleTextDragable,
  showTextModal, showTextModalEdit,
  multipleImageDragable, productModels,
  modelVariants, refItemDragable
} from './Designs'


const appReducer = combineReducers({
  nav: navReducer,
  isConnected: connectivity,
  activeTabBottom, activeSubTabButtom,
  textMenu, multipleTextDragable,
  showTextModal, showTextModalEdit,
  multipleImageDragable, productModels,
  modelVariants, refItemDragable,
});

export default appReducer
