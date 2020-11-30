import React from 'react'
import icon from '../../../public/images/icon1.png'
import '../styles/Card.css'

const declarativeCard = () => {
    return (
        <div>
            <img src={icon} />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
    )
}

export default declarativeCard