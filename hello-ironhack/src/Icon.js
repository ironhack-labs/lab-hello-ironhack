import React from 'react'
import './Icon.css'


const Icon = (props) => {


    return (
        <img className="icon" src={props.src} alt={props.name} />
    )
}

export default Icon