import React, { Component } from "react";
import "./styles.css";

import UpperIcons from "./UpperIcons";
import UperIcons from "./UpperIcons";
import MainTitle from "./MainTitle";
import ValueProp from "./ValueProp";
import Awesome from "./Awesome";

// La siguiente línea crea un error:
// import logo from "../public/images/react-logo.svg";

class AppBlack extends Component {
  render() {
    const upperIcons = {
      left: "./images/ironhack-logo.svg",
      right: "./images/menu-top.svg",
    };

    return (
      <div className="AppBlack" >
        <img src={"/images/react-logo.svg"} className="AppBlackBackgroundLogo1" />
        <img src={"/images/react-logo.svg"} className="AppBlackBackgroundLogo2" />
        <img src={"/images/react-logo.svg"} className="AppBlackBackgroundLogo3" />
        <img src={"/images/react-logo.svg"} className="AppBlackBackgroundLogo4" />
        <img src={"/images/react-logo.svg"} className="AppBlackBackgroundLogo5" />
        <img src={"/images/react-logo.svg"} className="AppBlackBackgroundLogo6" />

        <UpperIcons {...upperIcons} />
        <MainTitle />
        <ValueProp />
        <Awesome />
      </div>
    );
  }
}

export default AppBlack;
