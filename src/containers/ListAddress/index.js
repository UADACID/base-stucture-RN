import { connect } from 'react-redux'
import ListAddress from '../../screens/ListAddress'

const mapStateToProps = state => {
  return {
    userReducer : state.userReducer
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeDefaultAddress : (payload) => {
    dispatch({type:'ON_CHANGE_DEFAULT_ADDRESS', payload})
    dispatch({type:'Navigation/BACK'})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListAddress)
