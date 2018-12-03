import React from "react";
import "./App.css";

class App extends React.Component {

  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: ''
    };
    
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );
 
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
      </div>
    );
  }
}

export default App;