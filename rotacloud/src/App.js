import React from 'react';

import './App.css';

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

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}



export default App;
