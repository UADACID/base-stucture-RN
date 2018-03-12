import { connect } from 'react-redux'
import Carts from '../../screens/Carts'
import { NavigationActions } from "react-navigation";


const mapDispatchToProps = ( dispatch ) => {
  return {
    handleResetBack: (nav)=>{
      if (nav.index === 0) {
        return false;
      }
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'})
        ]
      })
      dispatch(resetAction);
      return true;
    },
    // removeOrder : (payload) => dispatch({type:'REMOVE_ORDER', payload})
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carts)
