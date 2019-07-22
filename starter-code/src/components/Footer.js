import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
  render(){
    return (
      <div className="Footer">
        <ul className="Links2">
          <li>
            <a href="#">you may also click here</a>
          </li>
          <li>
            <a href="#">or here, if you want</a>
          </li>
          <li>
            <a href="#">there's also this one</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;