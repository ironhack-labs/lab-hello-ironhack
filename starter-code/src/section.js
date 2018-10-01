import React from "react";

export const Section = ({image, title, subtitle}) => {
    return (
        <section style={{width:"15%", margin:"30px"}}>
            <img src={image}/>
            <h1>{title}</h1>
            <p>{subtitle}</p>    
        </section>
    )
}