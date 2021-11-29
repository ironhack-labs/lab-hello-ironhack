import React from 'react'
import './Button.css'

const Button = (props) => {

  return <a className="btn" href={props.href} target={props.target} >{props.text}</a>

}

export default Button