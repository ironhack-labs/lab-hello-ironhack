import React from 'react'

function FooterElement(props) {
    return(
        <div className= 'rambo'>
          <img src= {props.batman}/>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
    )
}

export default FooterElement