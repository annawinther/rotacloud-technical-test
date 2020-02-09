import React from 'react';
import axios from 'axios';
import Users from './users/Users';
import Roles from './roles/Roles';
import Navigation from './navigation/Navigation';

import { Route } from 'react-router';

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
        let usersAxios = userRes.data;
        let rolesAxios = rolesRes.data; 
        let filteredUsers = usersAxios.filter(user => { return user.roles !== null}); // remove users which do not have a role
        for (let i = 0; i < filteredUsers.length; i++){ //lopps over the filteredUsers
          let namedRoles = filteredUsers[i].roles.map(role => { // takes the role array inside of the filtered users and maps over it to get each role id of the user
              let roleIdFromUserAxios = role
              let userInfo = rolesAxios.find(roleFromRoles => roleFromRoles.id === roleIdFromUserAxios);
              let roleName = { roleName:userInfo.name, roleColor:userInfo.colour };

              return roleName
          })
          filteredUsers[i].roles = namedRoles; // named roles is array eg: [foh,reception]
          let sortRoles = filteredUsers[i].roles;
          sortRoles.sort(dynamicSort("roleName"));
        }
        function dynamicSort(property) {
          let sortOrder = 1;
          if(property[0] === "-") {
              sortOrder = -1;
              property = property.substr(1); // returns a portion of the string, starting at the specified index and extending for a given number of characters afterward
          }
          return function (a,b) {
              /* next line works with strings and numbers, 
               * and you may want to customize it to your needs
               */
              var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
              return result * sortOrder;
          }
        }
        usersAxios.sort(dynamicSort('name'))
        this.setState({ users: usersAxios })
      }))
    }


getRoles() {
  axios.all([
    axios.get(usersApi),
    axios.get(rolesAPI)
  ])
    .then(axios.spread((userRes, rolesRes) => {
      const usersAxios = userRes.data;
      const rolesAxios = rolesRes.data;

      const filteredUsers = usersAxios.filter(role => { return role.roles !== null}); // remove users which do not have a role

      for (let i = 0; i < rolesAxios.length; i++) {
          const matchedUsers = filteredUsers.filter(users => users.roles.includes(rolesAxios[i].id)); // match users with role ID
          rolesAxios[i].users = matchedUsers;

          let sortUsers = rolesAxios[i].users;
          sortUsers.sort(dynamicSort('name'));
      }
         function dynamicSort(property) {
          var sortOrder = 1;
          if(property[0] === "-") {
              sortOrder = -1;
              property = property.substr(1); // returns a portion of the string, starting at the specified index and extending for a given number of characters afterward
          }
          return function (a,b) {
              /* next line works with strings and numbers, 
               * and you may want to customize it to your needs
               */
              var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
              return result * sortOrder;
          }
      }

      rolesAxios.sort(dynamicSort('name'));
      this.setState({roles: rolesAxios});
  }));
}


  render() {
    return (
      <section id="rc-main">
        <Navigation />
        <div className="tables">
        <Route path='/users'>
          <Users users={this.state.users} role={this.state.roles}/>
        </Route>
        <Route path='/roles'>
          <Roles roles={this.state.roles}/>
        </Route>
        </div>
      </section>
    )
  }
}



export default App;
