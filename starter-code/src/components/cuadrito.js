import React from "react";

function Cuadrito(data) {
  let cosa = data.data;
 return(
<div className ='cuadrito'>
<img src = {cosa.img} />
     <div className="contents">
      <h1><p>{cosa.titulo}</p></h1>
      <h2>{cosa.descri}</h2>
    </div>
  </div>
  )
};


export default Cuadrito;