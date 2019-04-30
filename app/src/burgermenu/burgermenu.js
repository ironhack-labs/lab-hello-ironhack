import React from "react";
import "./burgermenu.css";


export default function burgerMenu(topmenu){
    return <div className="menu-top-image"
    style={{
        background: topmenu.bg,
    }}
    >
    <img alt="menu-top"
    className="menu-top-image-1" src="/images/menu-top.svg"/>
    </div>
}

