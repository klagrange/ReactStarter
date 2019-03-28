import { connect } from 'react-redux'
import Pure from './Pure'
import { getUsers } from 'models/home'

const s = state => ({
  users: state.home.users || []
})

const d = dispatch => ({
  getUsers: () => dispatch(getUsers())
})

export default connect(s, d)(Pure)