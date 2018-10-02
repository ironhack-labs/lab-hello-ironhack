import React from 'react';

export const Menu = () => {
    const white = "white";
    return (
        <div style={{ backgroundColor: "#1f2534", height: "600px" }}>
            <img src="../images/ironhack-logo.svg" />
            <img src="../images/menu-top.svg" />
            <h1 style={{ color: white }}> Say hello to <br /> ReactJS</h1>
            <h3 style={{ color: white }}> You will learn a Frontend <br /> framework from scratch, to <br /> become a Ninja Developer </h3>
            <button style={{ backgroundColor: white, padding: "10px" }}>Awesome!</button>
        </div>
    )
}