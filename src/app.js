import React from "react";

const App = () => {
  return (
    <div>
      <nav>
        <img src={"../images/ironhack-logo.svg"} />
        <img src={"./images/menu-top.svg"} />
      </nav>
      <h1 className='app'>Say hello to ReactJS</h1>
      <h3 className='header'>
        {" "}
        You will learn a Frontend framework from scratch, to become a Ninja
        Developer
      </h3>
      <button>Awesome!</button>
    </div>
  );
};

export default App;