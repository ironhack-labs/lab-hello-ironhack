import React from "react"

const Features = (props) => {

    return(
        <div>
            <img src={props.img} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )

}

export default Features