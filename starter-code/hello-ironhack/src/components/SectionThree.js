import React from 'react'



const SectionThree = (props) => {
  return (
 
       <article>
          <img src={props.img} alt=""></img>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
       </article>

    )
  }
  
  export default SectionThree;