import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (<header className="header">
  <Nav/>
  <div className="text-header">
  <h1>Say hello to ReactJS</h1>
  <p>You will learn how to use the most popular frontend library and become a super Ninja Developer</p>
  <button>Awesome!</button>
  </div>
  </header>)
};

export default Header;
