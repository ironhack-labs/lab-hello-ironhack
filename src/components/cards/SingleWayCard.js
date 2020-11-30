import React from 'react'
import icon from '../../../public/images/icon3.png'
import '../styles/Card.css'

const singleWayCard = () => {
    return (
        <div>
            <img src={icon} />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's</p>
        </div>
    )
}

export default singleWayCard