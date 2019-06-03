import React, {Component} from 'react'
import './Article.css'

const Article = props =>{
    return (
      <article>
        <figure>
          <img src={props.image} alt={props.title}></img>
        </figure>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
      </article>
    )
  
}



export default Article