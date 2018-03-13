import { connect } from 'react-redux'
import Transactions from '../../screens/Transactions'

const mapStateToProps = state => {
  let sumary = 0
  const sumaryOfAllOrder = state.orderReducer.map(obj => {
    sumary += obj.totalPrice
  })
  return {
    sumary
  }
}

export default connect(mapStateToProps)(Transactions)
