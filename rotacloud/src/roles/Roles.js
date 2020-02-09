import React, { Component } from 'react'
import RolesInfo from './RolesInfo';

export default class Roles extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Users</th>
                    </tr>
                </thead>
                <tbody>
              {/* looping over the roles data coming from the props and render each one inside RolesInfo component passing in the whole role object */}
                    {this.props.roles.map(role => {
                        return <RolesInfo key={role.id} role={role}/>
                    })}
                </tbody>
            </table>
        )
    }
}
