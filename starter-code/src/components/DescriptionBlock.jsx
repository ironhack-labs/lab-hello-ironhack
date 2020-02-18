import React from "react";


function DescriptionBlock({source, title, text}) {
  return (
    <div className="img-box">
      <img src={source} alt="image" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default DescriptionBlock;