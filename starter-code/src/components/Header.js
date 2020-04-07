import React from 'react';


const Header = ({url}) => {
  return (
    <header className="App-header">
        
            <img src={url} className="App-logo" alt="logo" />
            <img src={url} className="App-menu" alt="menu" />
       

    </header>
  );
}

export default Header;