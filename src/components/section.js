import React from 'react'
import './App.css'
import Button from './button.js'
const Section = () => {
    const title = 'Say hello to REACTJS'
    const paragraph = 'You will learn how to use the most popular fronted library, and become a super ninja developer.'
    return (
        <div className="section">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <Button />
        </div>
    )
}

export default Section