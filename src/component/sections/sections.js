import React from 'react'
import './sections.css'


const Section = props => { 
    return (
        <div className="col-3" >
            <img src= {props.image} alt={props.alt}></img>
            <h2>{props.titleText}</h2>
            <p>{props.paragraph}</p>
        </div>
    )
}


export default Section