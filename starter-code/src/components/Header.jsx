import React from "react";

function Header(props) {
  return (
    <div>
        <img className="logo" src={props.image} alt={props.alt} />
    </div>
  );
}
export default Header;
