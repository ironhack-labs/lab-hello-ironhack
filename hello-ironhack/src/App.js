import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user-component/user'

class App extends React.Component {
  
  user = null
  
  render(){
    return (
      <div className="App">
        <User user = {this.user} />
      </div>
    );
  }
  

}

export default App;
