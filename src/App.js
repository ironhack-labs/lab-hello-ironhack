// This file is just a React component.

import React, { Component } from "react";
import "./App.css";
 
class App extends Component {

  render() {


    const headline = <h4>You will learn a Frontend framework from scratch, to become a Ninja Developer</h4>

    // const formatName = (user) => {
    //     return `${user.firstName} ${user.lastName}`;
    //   }

    // const user = {
    //     firstName: 'Harper',
    //     lastName: 'Perez',
    //     avatarUrl: ''
    //   };  

    // const element = (
    //     <h2>
    //       Hello, {formatName(user)}!
    //     </h2>
    //   );

       
    return (

      <div className="App">

    <img src="/images/ironhack-logo.svg"></img>
        <h1> Say hello to ReactJS </h1>
        {/* {element} */}
        {headline}
        <img src="/images/icon1.png"></img>
        <img src="/images/icon2.png"></img>



      </div>
    );
  }
}
 
export default App;