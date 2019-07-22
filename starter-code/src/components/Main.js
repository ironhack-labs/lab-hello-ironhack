import React, { Component } from "react";
import "../App.css";

class Main extends Component {

  render() {
    
    return(
      
      <div class="main-div">
        <div class="title-div">
        <div id="title"><img src='/world.gif'></img><h1>Welcome To The Initech Corporation Homepage</h1><img src='/world.gif'></img></div>
        <h3>*we strive for execllence since 1991*</h3>
        </div>

        <div class="links">
          <h4 class="section-title">Employee Links</h4>
          <ul class="list">
            <li><a href="#">Employee Login</a></li>
            <li><a href="#">Human Resources</a></li>
            <li><a href="#">Monday Motivation</a></li>
            <li><a href="#">Whos birthday is it this month?</a></li>
          </ul>
        </div>


        <div class="links">
          <h4 class="section-title">Customer Links</h4>
          <ul class="list">
            <li><a href="#">Initech Technologies</a></li>
            <li><a href="#">Data Analysis</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div class="links">
          <h4 class="section-title">Interesting Sites</h4>
          <ul class="list">
            <li><a href="#">The new Alpha Elite Pager!</a></li>
            <li><a href="#">Storing your floppy disk safely</a></li>
            <li><a href="#">Mobile Phones - "How small is too small?"</a></li>
            <li><a href="#">Macintosh Revolution</a></li>
          </ul>
        </div>







        
      </div>
    )
  }
}

export default Main;
