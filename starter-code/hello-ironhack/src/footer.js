// step 1 new component: start a new file.
// step 2 copy all things from top of app.js original
// step 3 copy class middle section
// all classNames are to be capitalized.

import React, { Component } from 'react';
import './App.css';


class Footer extends Component {

    render(){
      return(
      <div className="footer">

        <div class="flex-footer">
            <div class="parts">
              <img src="images/icon1.png" alt="image"/>
              <h3>Declarative</h3>
              <h4>React makes it painless to create interactive UI's.</h4>
        </div>
      
        <div class="parts">
              <img src="images/icon2.png" alt="image"/>
              <h3>Components</h3>
              <h4>React makes it painless to create interactive UI's.</h4>
        </div>
      
        <div class="parts">
              <img src="images/icon3.png" alt="image"/>
              <h3>Single-Way</h3>
              <h4>React makes it painless to create interactive UI's.</h4>
        </div>
      
        <div class="parts">
              <img src="images/icon4.png" alt="image"/>
              <h3>JSX</h3>
              <h4>React makes it painless to create interactive UI's.</h4>
        </div>
      </div>
    </div>
            )
          }      
        }


export default Footer;
