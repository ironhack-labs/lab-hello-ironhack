import React, { Component } from 'react'
import './sections.css'


const SectionCard = props => {
    return (
        <section>
            <img src={props.img}/>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </section>
        
    )
}

export default SectionCard