import React, {Component} from 'react';
import '../stylesheets/Footer.css';

class Footer extends Component {

  

  render() {

    return (
      <ul className="footer">
        <li> <a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact us</a></li>

    </ul>
  );
}
}

export default Footer;
