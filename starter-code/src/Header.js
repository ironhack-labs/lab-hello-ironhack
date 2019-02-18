import React from "react";
import "./Header.css";

function Header(props) {
    return <div className="header">
                <img src={props.logo} />
                <img src={props.menu} />
    </div>
}

// don't forget to export the component so you can import it somewhere else
export default Header;