import React, { Component } from "react";
import './Navbar.css'


const navbar = (props) => {
  const menu = props.menu.map((menuItem, i) =>
    <li key={i}><a className="linkNav" href={menuItem.url}>{menuItem.label}</a></li>
  )
  return (
    <div> 
      <ul className="navbar">
      <li><img src={props.image}/></li>
        {menu}    

      </ul>

    </div>
  )
}



export default navbar;