import React, { Component } from 'react';
import '../nav.css';

class Nav extends Component {
  
  navbar = ()=>{
    let arr = ["Home","Portfolio","Gallery","About","Contact Me"];
    return(
    arr.map((e)=>{
      return(
        <li>{e}</li>
      )
    })
    )
  }
  
  
  
  render(){
    return(
      <div>
        <div>
        <ul class="nav-bar">
          {this.navbar()}
        </ul>
        </div>
      </div>
    )
  }
}
export default Nav;