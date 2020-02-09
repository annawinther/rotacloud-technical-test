import React, { Component } from 'react'
import UserInfo from './UserInfo';

export default class Users extends Component {
    render() {
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
                    {/* looping over the users data coming from the props and render each one inside UsersInfo component passing in the whole user object*/}
                    {this.props.users.map((user) => {
                        const header = Object.keys(user)
                        return <UserInfo key={user.id} header={header} user={user} />
                    })}
                </tbody>
            </table>
        )
    }
}
