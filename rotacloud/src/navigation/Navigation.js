import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assest/logo.svg';

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav">
                    <NavLink to="/" className="nav-logo">
                        <img src={Logo} alt="RotaCloud"/>
                    </NavLink>
                </div>
                <NavLink to='/' exact className="nav-item" activeClassName="active">Instructions</NavLink>
                <NavLink to="/users" className="nav-item" activeClassName="active">Users</NavLink>
                <NavLink to="/roles" className="nav-item" activeClassName="active">Roles</NavLink>
            </nav>
        )
    }
}
