import React from "react";
import logo from "../../public/ironhack-logo.svg";
import menuImg from "../../public/menu-top.svg";
import reactLogo from "../../public/react-logo.svg";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <nav>
          <img src={logo} alt="" />
          <img src={menuImg} alt="" />
        </nav>
        <div className="content">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a frontend framework from scratch to become a Ninka
            Developer
          </p>
          <button>
            <h2>Awesome !</h2>
          </button>
        </div>
        <img src={reactLogo} alt="" />
      </div>
    );
  }
}

export default App;
