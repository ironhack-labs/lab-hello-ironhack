import React, { Component } from "react";
import HeaderMain from "./HeaderMain";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import List from "./List";
import Images from "./Images";
import "./styles.css";
// import ironhack-logo from "./public/images/ironhack-logo.svg";
// import menu-top from "./public/images/menu-top.svg";

export class app extends Component {
  render() {
    return (
      <div>
          <HeaderMain />
        <div className="grid"><Images/></div> 
          <Title/>
       <Paragraph/>
        <Button/>
      <List/>
      </div>
    );
  }
}

export default app;
