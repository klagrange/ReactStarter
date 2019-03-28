import React, { Component } from 'react'
import { increment } from '../../models';

class Home extends Component {
   
    render() {
        const { name, increment, a } = this.props

        a()
        increment()

        return (
            <div> Hello {name}! </div>
        )
    }
}

export default Home