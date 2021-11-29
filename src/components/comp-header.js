import React from 'react'
import '../css/comp-header.css'

const Header = (props) => {

  return (
  <header> 
    <img src={props.srcLogo} alt="Logo"/>
    <ul>
    <img src={props.srcMenuTop} alt="Menu"/>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
    </ul>
  </header>
  )
  
//   <a className="btn" style={{ backgroundColor: props.danger ? "red" : "green" }
//   } href={props.href} target={props.target} > {props.text}</a>

}

export default Header