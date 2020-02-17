import React from "react";
import Button from "./Button"
import "./../styles/Header.css"

export default function Header({
    title,
    info
}) {
    return (
       <div className="header">
            <h1 className="header-title">{title}</h1>
            <p className="header-info">{info}</p>
            <Button 
                text="Awesome!"
            />
        </div> 
    )
    
}