import React, {Component} from 'react';
import './header.css'

class Header extends Component {

  render() {
    return (
      <header>
        <img src={require('./public/images/ironhack-logo.svg')} alt=""/>
        <img src={require('./public/images/menu-top.svg')} alt=""/>
      </header>
    )
  }
}

export default Header;