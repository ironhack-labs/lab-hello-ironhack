import React from "react";


const styleNav = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",


}
export const NavBar = () => {
    return (
                <nav style={styleNav}>
                    <img src="images/ironhack-logo.svg"/>
                    <img src="images/menu-top.svg"/>
                    
                </nav>
            );
}




