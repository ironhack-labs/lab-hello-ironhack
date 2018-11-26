import ReactDOM from 'react-dom';
import React from 'react';

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: ' 40px 60px',
//   backgroundColor: 'black',
};
const menu = {
  width: '30px',
};
const Nav = () => (
    <div>
      <nav style={navStyle}>
        <img src="/images/ironhack-logo.svg" />
        <img style={menu} src="/images/menu-top.svg" />
      </nav>
    </div>
  );
export default Nav;
