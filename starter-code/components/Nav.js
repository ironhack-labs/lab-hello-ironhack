import React from "react"

const Nav = (props) => {
  return (
    <nav>
      <img id="logo" src={props.logo}></img>
      <img id="menu" src={props.menu}></img>
    </nav>
  )
}

export default Nav