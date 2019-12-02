import React from 'react'
import sectionCss from './styles/Section.css'



function Section(props) {
    return (
        <div className='package'>
            <img src={props.image}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Section