import React, { Component } from 'react'
import UserInfo from './UserInfo';

export default class Users extends Component {
    render() {
        // console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user, role) => {
                        const header = Object.keys(user)
                        return <UserInfo key={user.id} header={header} user={user} />
                    })}
                </tbody>
            </table>
        )
    }
}
