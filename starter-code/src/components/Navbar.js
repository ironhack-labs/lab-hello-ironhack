import React, {Component} from 'react';
import '../stylesheets/Navbar.css';

class Navbar extends Component {

  

  render() {

    return (
      <ul className="navbar">
      
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Gallery</a>
      <a href="#">Blog</a>
      <a href="#">Contact us</a>
      
      


    </ul>
  );
}
}

export default Navbar;
