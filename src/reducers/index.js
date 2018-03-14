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

import { paymentsReducer } from './Payments'
import { modalOverlay } from './ModalOverlay'
import { categoryOverlay } from './CategoryOverlay'
import { startupInfo } from './StartupInfo'

import { orderReducer } from './Carts'
import { configReducers } from './Configs'
import { shipping } from './Shipping'
import { userReducer } from './Users'
import { addressReducer } from './Address'

import { categoriesReducer } from './Categories'


const appReducer = combineReducers({
  nav: navReducer,
  isConnected: connectivity,
  configReducers,
  activeTabBottom, activeSubTabButtom,
  textMenu, multipleTextDragable,
  showTextModal, showTextModalEdit,
  multipleImageDragable, productModels,
  modelVariants, refItemDragable,

//payment
  paymentsReducer,
//overlay
  modalOverlay,
  categoryOverlay,
  startupInfo,

  orderReducer,
  shipping,
  userReducer,
  addressReducer,

  //screen
  categoriesReducer
});

export default appReducer
