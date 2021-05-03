import React from "react";

const Image = ({img,header, parrafo}) => {
    return (
      <div className="element">
       <img src={img}></img>
       <h2>{header}</h2>
        <p>{parrafo}</p>       

      </div>
    )
  }
  
  export default Image;