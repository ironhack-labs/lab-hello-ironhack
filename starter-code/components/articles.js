import React, { Component } from "react";


const Articles = props => {

  return (
    <article>
      <header>
        <img src={props.pic} />
        <h3>{props.title}</h3>
      </header>
      <p>{props.description}</p>
    </article>

  )
}

export default Articles