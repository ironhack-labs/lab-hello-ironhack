import React from "react"


function Box(props){
return(
    <article className="box">
    <img src={props.url} />
<h3>{props.title} </h3>
<p>{props.text} </p>





    </article>
)



}

export default Box