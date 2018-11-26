import React from "react";
import Navigation from "./Navigation.js";
import Title from "./Title.js";
import Box from "./Box.js";
import "./Landing.css";

const Landing = () => {
    return (
      <div className="Landing">
        <Navigation />
        <Title />
        <Box />
      </div>

    )
};


export default Landing;