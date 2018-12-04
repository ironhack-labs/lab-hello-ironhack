import React from "react";
 
const Navbar = (props) => {
    return (
        <object type="image/svg+xml" data={props.path} className={props.class}>
        </object>    
  )
}

export default Navbar;