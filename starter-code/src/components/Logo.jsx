import React from "react";

function Logo(props) {
  return (
    <div>
    
    <object type="image/svg+xml" data={props.picture}>
      Your browser does not support SVG
    </object>
    </div>
  );
}

export default Logo;
