import React, { Component } from 'react'
import Spinner from 'components/Spinner'

class Home extends Component {
    
    componentWillMount() {
        this.props.getUsers()
    }

    renderUsers(users) {
        return (
            <div>
                { 
                    users.map(user => <div key={user.id}> {user.name} ({user.username})</div>)
                }
            </div>           
        )
    }

    render() {
        const { users } = this.props
        return (
            <div>
                {
                    users.length === 0
                        ? <Spinner />
                        : this.renderUsers(users)
                }
            </div>
        )
    }
}

export default Home