import React from 'react';
import axios from 'axios';
import Users from './users/Users';
import Roles from './roles/Roles';
import Navigation from './navigation/Navigation';

import { Route } from 'react-router';

import './App.css';
import Home from './navigation/Home';

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
        let filteredUsers = usersAxios.filter(user => { return user.roles !== null }); // remove users which do not have a role

      // loops over the filteredUsers and takes the role array inside of the filtered users and maps over it to get each role id of the user. It then matches the role id of the user with the role id from the rolesAxios data and modifies the data to include the name of the role and the colour as key value pairs. Returns the modified data and sorts it in order as requested.

       for (let i = 0; i < filteredUsers.length; i++){ 
          let rolesInfo = filteredUsers[i].roles.map(role => { 
              let roleIdFromUserAxios = role
              let userInfo = rolesAxios.find(roleFromRoles => roleFromRoles.id === roleIdFromUserAxios); 
              let roleNameAndColour = { roleName: userInfo.name, roleColor: userInfo.colour };

              return roleNameAndColour
          })
          filteredUsers[i].roles = rolesInfo; // rolesInfo is an  array eg: [ foh, reception ]
          let sortRoles = filteredUsers[i].roles;
          sortRoles.sort(dynamicSort("roleName"));
        }

        // function to dynamically sort the array. Takes the proprety of the object you want to sort.
        function dynamicSort(property) {
          let sortOrder = 1;
          if(property[0] === "-") {
              sortOrder = -1;
              property = property.substr(1); // returns a portion of the string, starting at the specified index and extending for a given number of characters afterward
          }
          return function (a,b) {
              var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
              return result * sortOrder;
          }
        }
        usersAxios.sort(dynamicSort('name'))
        this.setState({ users: usersAxios }) // update the initial state 'users' to be the modified and sorted usersAxios data 
      }))
      .catch( error => {
        this.setState({ errorMessage: error.message }) // update the error message in case something has gone wrong when getting the data from the API 
      })
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

      // loops over the filteredUsers and checks and matches the users with the role id from the rolesAxios data to filter out the users who have the respective role. Then adds a new property yo the rolesAxios data called users containing an array of users with that role. Then sorts the function to sort the name of the role in order as requested.

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
              property = property.substr(1); 
          }
          return function (a,b) {
              var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
              return result * sortOrder;
          }
      }
      rolesAxios.sort(dynamicSort('name'));
      this.setState({ roles: rolesAxios }); // update the initial state 'roles' to be the modified and sorted rolesAxios data 
  }))
  .catch( error => {
    this.setState({ errorMessage: error.message }) // update the error message in case something has gone wrong when getting the data from the API 
  })
}

  render() {
    return (
      <section id="rc-main">
        <Navigation />
        <Route exact path='/' component={Home}/>
        <div className="tables">
        <Route path='/users'>
          {/* pass the updated users state to the Users component to render it */}
          <Users users={this.state.users}/> 
        </Route>
        <Route path='/roles'>
            {/* pass the updated roles state to the Roles component to render it */}
          <Roles roles={this.state.roles}/>
        </Route>
        </div>
      </section>
    )
  }
}

export default App;
