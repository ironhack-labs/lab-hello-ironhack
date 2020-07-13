import React from 'react'
import './article2.css'

const Article2 = props => {


    return (
    
        <article className="stundent-card">
            <img src={props.image}></img>   
            <h3>{props.title}</h3>
            <p>{props.description}</p>

                    </article>
                    
          
        
    )
}


export default Article2