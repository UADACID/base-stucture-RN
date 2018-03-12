import { connect } from 'react-redux'
import Homes from '../../screens/Homes'

const mapDispatchToProps = dispatch => ({
  showStartupInfo : () => dispatch({type:'SHOW_STARTUP_INFO_OVERLAY'})
})

const mapStateToProps = state => {
  return {
    showInfoStartup: state.configReducers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homes)
