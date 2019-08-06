import './Nav.css'
import React, { Component } from 'react';


const Nav = (props) => {
  return ( 
    <div className="Nav">
        <div class="logo">
            <img src="images/ironhack-logo.svg" onerror="this.onerror=null; this.src='image.png'"></img>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    </div>
      
    
   );
}


 
export default Nav;