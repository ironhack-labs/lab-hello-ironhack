import React from 'react'

import './Info.css'

function Info(props) {

    // console.log(props)

    return (
        <div className="infobox">
          <figure className="infoimg"><img src={props.image}></img></figure>
          <h2>{props.title}</h2>
          <p>{props.text}</p>

        </div>
    )
}

export default Info