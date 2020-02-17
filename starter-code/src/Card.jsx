import React from 'react'

const Card = ({ title, subTitle, btnText }) => {
    return (<div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <button>{btnText}</button>
    </div>)
}

export default Card
