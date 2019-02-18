import React from "react";

function Image(props) {
  return  <div className="Image">
    <img src={props.imgUrl} />
  </div>
}

export default Image;