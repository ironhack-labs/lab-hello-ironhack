import React from 'react'
import icon from '../../../public/images/icon2.png'
import '../styles/Card.css'

const componentsCard = () => {
    return (
        <div>
            <img src={icon} />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
        </div>
    )
}

export default componentsCard