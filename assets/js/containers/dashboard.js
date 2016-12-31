import { connect } from 'react-redux'
import DashboardDummy from '../components/dashboard'

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

const Dashboard = connect(
  mapStateToProps
)(DashboardDummy)

export default Dashboard
