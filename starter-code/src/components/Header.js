import React from 'react';

function Header() {
    return(
      <div className="header container">
          <div className="navbar">
            <img src='./images/ironhack-logo.svg' />
            <img src='./images/menu-top.svg' />
          </div>
          <h1>
              Say Hello to ReactJS
          </h1>
          <h2>
                You will learn a Frontend <br></br>
                framework from scratch, to <br></br>
                become an Ninja Developer.
          </h2>
      </div>
    );
};

export default Header;