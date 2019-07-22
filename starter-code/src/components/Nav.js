import React, {Component} from 'react';
import '../App.css';

class Nav extends Component {
  render(){
    return (
      <div className="Nav">
        <a className="Logo" href="#">LOGO</a>
        <ul className="Links">
          <li>
            <a href="#">click here</a>
          </li>
          <li>
            <a href="#">or here</a>
          </li>
          <li>
            <a href="#">maybe here</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;