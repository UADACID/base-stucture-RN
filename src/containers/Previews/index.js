import { connect } from 'react-redux'
import Previews from '../../screens/Previews'
import { NavigationActions } from "react-navigation";


const mapDispatchToProps = ( dispatch ) => {
  return {
    handleBack: (nav)=>{
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    },
    toScreen: (routeName)=>{
      // dispatch(NavigationActions.navigate({ routeName: routeName }))
      dispatch({type:'SET_DEFAULT_SUB_TAB_BOTTOM_SELECTED'})
      dispatch({type:'SET_DEFAULT_TAB_BOTTOM_SELECTED'})
      dispatch({type:'SET_DEFAULT_SELECTED_MODEL_VARIANT_COLOR'})
      dispatch({type:'SET_DEFAULT_MULTIPLE_IMAGE_DRAGABLE'})
      dispatch({type:'SET_DEFAULT_MULTIPLE_TEXT_DRAGABLE'})
      dispatch({type:'SET_DEFAULT_SELECTED_MODEL'})
      dispatch({type:'SET_DEFAULT_CHANGE_REFS'})
      dispatch({type:'SET_DEFAULT_TEXT_MENU'})
      dispatch({type:'SET_DEFAULT_TEXT_MODAL'})
      dispatch({type:'SET_DEFAULT_SHOW_TEXT_MODAL_EDIT'})
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'TabHome' }),
          NavigationActions.navigate({ routeName: 'Carts' }),
        ],
      });
      dispatch(resetAction);
    },
    addToCart:(payload) => {
      // console.log('asdasdasdasd');
      // console.log(payload);
      dispatch({type:"ADD_ORDER", payload})
    }
  }
}


const mapStateToProps = (state, ownProps) => {

  const { selectedId, models } = state.productModels
  const filterModelName = models.filter(model => model.id == selectedId)
  return {
    nav:state.nav,
    productModels:state.productModels,
    modelName : filterModelName[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Previews)
