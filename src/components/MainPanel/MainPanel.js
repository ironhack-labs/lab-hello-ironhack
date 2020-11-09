import React from "react";
import "./MainPanel.css";


const MainPanel = (props) =>{
    return (
            <div className="MainPanel">
                <div className="menu">
                    <img src={props.logo}/>
                    <img src={props.menu}/>
                </div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button>{props.buttonText}</button>
        </div>
    )
}

export default MainPanel