import React from 'react'
import icon from '../../../public/images/icon4.png'
import '../styles/Card.css'

const jsxCard = () => {
    return (
        <div>
            <img src={icon} />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    )
}

export default jsxCard