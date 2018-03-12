import { connect } from 'react-redux'
import Homes from '../../screens/Homes'

const mapDispatchToProps = dispatch => ({
  showStartupInfo : () => dispatch({type:'SHOW_STARTUP_INFO_OVERLAY'})
})

export default connect(null, mapDispatchToProps)(Homes)
