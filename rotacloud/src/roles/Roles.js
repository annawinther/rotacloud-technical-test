import React, { Component } from 'react'
import RolesInfo from './RolesInfo';

export default class Roles extends Component {
    render() {
        // console.log('props', this.props)
        return (
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Users</th>
                </thead>
                {this.props.roles.map(role => {
                    
                    return <RolesInfo key={role.id} role={role}/>
                })}
            </table>
        )
    }
}
