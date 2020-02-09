import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assest/logo.svg';

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <img src={Logo} alt="RotaCloud" />
                <NavLink to="/users" className="nav-item" activeClassName="active">Users</NavLink>
                <NavLink to="/roles" className="nav-item" activeClassName="active">Roles</NavLink>
            </nav>
        )
    }
}
