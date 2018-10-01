import React from "react";



const Section = (props) => {
    return (
        <div>
            <img src={props.path} alt="" width="150" height="150" />
            <h3>{props.title}</h3>
            <p>{props.text1}<br />{props.text2}<br />{props.text3}</p>
        </div>
    )
}

module.exports = Section;