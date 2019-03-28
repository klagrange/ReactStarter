import { connect } from 'react-redux'
import Pure from './Pure'

import { a, increment } from '../../models/auth'

const s = state => ({
  name: "Keith",
})

const d = dispatch => ({
  a: () => {
    console.log('dispatching a')
    dispatch(a())
    // dispatch({ type: '[4] a' })
  },
  increment: () => {
    dispatch(increment())
  }
})

export default connect(s, d)(Pure)