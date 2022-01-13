import React from "react";

// function Card (props) {
//     return (
//         <div className="card-feature">
//             <img src={props.imgSource} alt={props.title} />
//             <h3>{props.title}</h3>
//             <p>{props.description} </p>
//         </div>
//     )
// }

function Card ({imgSource, title, description}) {
    // using destructuring
    // const {imgSource, title, description} = props;
    return (
        <div className="card-feature">
            <img src={imgSource} alt={title} />
            <h3>{title}</h3>
            <p>{description} </p>
        </div>
    )
}

export default Card;