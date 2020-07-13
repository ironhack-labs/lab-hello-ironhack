import React from 'react'

import './Cards.css'


const Cards = props => {
    return (
            <div className='articles'>
                <img className='imgArt' src={props.imgSrc} alt='icon1'/>
                <h3>{props.titleCard}</h3>
                <p>{props.textCard}</p> 
            </div>
    )
}

export default Cards