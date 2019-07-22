import React, {Component} from 'react';
import '../stylesheets/Footer.css';

class Footer extends Component {

  

  render() {

    return (
      <ul className="footer">
        <li> <a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Pinterest</a></li>
        <li><a href="#">Contact us</a></li>

    </ul>
  );
}
}

export default Footer;
