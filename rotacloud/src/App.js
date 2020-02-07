import React from 'react';
import axios from 'axios';
import Users from './users/Users';
import './App.css';


const usersApi = 'https://custom.rotacloud.com/angular-challenge/users.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      errorMessage: '',
      users: [],
      roles: [],
      name: '',
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get(usersApi)
      .then(res => {
        this.setState({ users: res.data});
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      })
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Users users={this.state.users} />
      </div>
    )
  }
}



export default App;
