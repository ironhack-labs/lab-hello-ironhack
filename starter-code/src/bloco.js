
import React from "react";

const Bloco = (props) => {
  return(
    <div>
      <img src={props.image}/>
        <h3>{props.titleName}</h3>
      <p>{props.content}</p>
    </div>
  );
}
export default Bloco;
