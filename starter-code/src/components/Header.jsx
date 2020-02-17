import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderButton from "./HeaderButton";

export default function Header(props){       
        
    return (
      <div className="header">
            <HeaderLogo />
            <HeaderButton />
         
      </div>      
    );               
}
