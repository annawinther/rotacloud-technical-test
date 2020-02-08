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
        
         Object.keys(users).forEach(function(key) {
          let users1 = users[key];
          const array = users1.roles;

          if (array) {
            let yo = array.map(role => {
              let roleID = role
              let test = rolesAxios.find(role => role.id === roleID);
              let roleName = test.name;
               return roleName
              })
            users1.roles = yo;
          }
          return users1
        })
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

      let filteredUsers = usersAxios.filter(function(el) { return el.roles != null}); // remove users which do not have a role

      for (var i = 0; i < rolesAxios.length; i++) {
          var matchedUsers = filteredUsers.filter(users => users.roles.includes(rolesAxios[i].id)); // match users with role ID
          rolesAxios[i].users = matchedUsers; 
      }

      this.setState({roles: rolesAxios});
  }));
}


  render() {
    console.log('userState', this.state.users)
    console.log('roleState', this.state.roles)
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
