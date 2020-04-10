import React, { Component } from "react";
import "./styles.css";

import UpperIcons from "./UpperIcons";
import UperIcons from "./UpperIcons";
import MainTitle from "./MainTitle";
import ValueProp from "./ValueProp";
import Awesome from "./Awesome";

class AppBlack extends Component {
    render() {

        const upperIcons = {
            left: "./images/ironhack-logo.svg",
            right: "./images/menu-top.svg"
        };

        return(
            <div className="AppBlack">
               <UpperIcons {...upperIcons} />
               <MainTitle />
               <ValueProp />
               <Awesome />
            </div>
        );
    }
}

export default AppBlack;