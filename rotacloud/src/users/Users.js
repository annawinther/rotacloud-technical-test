import React, { Component } from 'react'
import UserInfo from './UserInfo';

export default class Users extends Component {
    render() {
        return (
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Roles</th>
                </thead>
                {this.props.users.map(user => {
                    const header = Object.keys(user)
                    return <UserInfo key={user.id} header={header} user={user}/>
                })}
            </table>
        )
    }
}
