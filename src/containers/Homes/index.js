import { connect } from 'react-redux'
import Homes from '../../screens/Homes'
import NavigationActions from 'react-navigation'

const mapDispatchToProps = dispatch => ({
  showStartupInfo : () => dispatch({type:'SHOW_STARTUP_INFO_OVERLAY'}),
  toScreen: ({routeName, params})=>{
    // console.log({routeName, params});
    dispatch(NavigationActions.navigate({ routeName: routeName, params}))
  },
})

const mapStateToProps = state => {
  return {
    showInfoStartup: state.configReducers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homes)
