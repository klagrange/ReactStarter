import React, { Component } from 'react'

class Home extends Component {
    
    componentWillMount() {
        this.props.getUsers()
    }

    renderUser(user) {
        return (
            <div> {user.name} ({user.username})</div>
        )
    }

    render() {
        const { users } = this.props

        return (
            <div>
                <div>
                    { users.map(user => this.renderUser(user)) }
                </div>
            </div> 
        )
    }
}

export default Home