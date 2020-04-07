import React from "react";


const Information = ({title, url, description}) => {
    return (
        <div className="container-individual-information">
            <img src={url}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Information;

