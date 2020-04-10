import React from 'react';
import './App.css';
import Icon from "./components/Icons";

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src="../images/ironhack-logo.svg" alt="" />
          <img src="../images/menu-top.svg" alt="" />
        </nav>
        <div>
          <h1>Say hello to <br />ReactJs</h1>
          <p>You will learn a Frontend <br />framework from scratch, to <br />become a Ninja Developer.</p>
          <button>Awesome!</button>
        </div>
      </header>
      <div>
        <Icon image={"../images/icon1.png"} title={"Declarative"} text={"dvdsfhvkjhglfb"} />
        <Icon />
        <Icon />
        <Icon />
      </div>

    </div>
  );
}

export default App;
