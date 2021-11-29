import React from 'react'
import './Menu.css'


const Menu = (props) => {

  return (
    <a href={props.href}>
        <img src={props.src} alt="Burger" />
    </a>
  )
}

export default Menu