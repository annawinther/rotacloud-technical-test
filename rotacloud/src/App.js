import React from 'react';
import axios from 'axios';
import Users from './users/Users';
import Roles from './roles/Roles';


import './App.css';


const usersApi = 'https://custom.rotacloud.com/angular-challenge/users.json';
const rolesAPI = 'https://custom.rotacloud.com/angular-challenge/roles.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      errorMessage: '',
      users: [],
      roles: [],
    }
  };

  componentDidMount() {
    this.getUsers();
    this.getRoles();
  }

  getUsers() {
    axios.all([
      axios.get(usersApi),
      axios.get(rolesAPI)
    ])
      .then(axios.spread((userRes, rolesRes) => {
        let users = userRes.data;
        let rolesAxios = rolesRes.data;
        
        let filteredUsers = users.filter(user => { return user.roles !== null}); // remove users which do not have a role

        for (let i = 0; i < filteredUsers.length; i++){
          let namedRoles = filteredUsers[i].roles.map(role => {
              let roleIdFromUserAxios = role
              let userInfo = rolesAxios.find(roleFromRoles => roleFromRoles.id === roleIdFromUserAxios);
              let roleName = userInfo.name;
              return roleName
          })
          filteredUsers[i].roles = namedRoles;
        }
        this.setState({ users: users })
      }))
    }


getRoles() {
  axios.all([
    axios.get(usersApi),
    axios.get(rolesAPI)
  ])
    .then(axios.spread((userRes, rolesRes) => {
      let usersAxios = userRes.data;
      let rolesAxios = rolesRes.data;

      let filteredUsers = usersAxios.filter(role => { return role.roles !== null}); // remove users which do not have a role

      for (var i = 0; i < rolesAxios.length; i++) {
          var matchedUsers = filteredUsers.filter(users => users.roles.includes(rolesAxios[i].id)); // match users with role ID
          rolesAxios[i].users = matchedUsers; 
      }

      this.setState({roles: rolesAxios});
  }));
}


  render() {
    return (
      <div>
        <h1 onClick={this.findRolebyUser}>Hello</h1>
         <Users users={this.state.users} /> 
         <Roles roles={this.state.roles}/> 
      </div>
    )
  }
}



export default App;
