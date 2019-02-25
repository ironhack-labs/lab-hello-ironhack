import React from 'react'

export default ({img, title, desc}) => {
    return (
    <div className="card">
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
    )
}