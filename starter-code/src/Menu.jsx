import React from 'react'

const Menu = ({ title, description, imgUrl }) => {
    return (
        <div className="cat-container">
            <img src={imgUrl} className="icon-single-way" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Menu