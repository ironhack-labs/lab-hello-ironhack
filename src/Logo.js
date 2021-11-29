import React from 'react'
import './Logo.css'


const Logo = (props) => {

  return (
    <a href={props.href}>
        <img src={props.src} alt="IronHack Logo" />
    </a>
  )
}

export default Logo