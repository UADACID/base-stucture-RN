import { connect } from 'react-redux'
import Settings from '../../screens/Settings'

const mapStateToProps = state => {
  return {
    showInfoStartup : state.configReducers.showInfoStartup
  }
}

const mapDispatchToProps = dispatch => ({
    onChangeShowInfo : () => dispatch({type:'ON_CHANGE_SHOW_INFO_STARTUP'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
