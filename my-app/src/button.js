import React from 'react'
import './button.css'

const Button = (props) => {

    return <a className="btn" style={{ backgroundColor: props.danger ? "red" : "white" }
    } href={props.href} target={props.target} > {props.text}</a>

}

export default Button