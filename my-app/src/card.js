import React from 'react'
import Button from './button'
import './card.css'


const Card = (props) => {

    const capitalize = (name) => name[0].toUpperCase() + name.slice(1)


    return (
        <article className="card">
            <header>
                <p className="title">{capitalize(props.name)}</p>
                <img src={props.src} alt={props.name} />
            </header>
            <div>
                <p></p>
            </div>
            
        </article>
    )
}

export default Card