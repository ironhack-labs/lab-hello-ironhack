import React, { Component } from "react";
import "./App.css";
import Icon from "./Icon";
import TitleText from "./TitleText";
import Text from "./Text";
import Button from "./Button";

class MainCointainer extends Component {

  render() {
    return (
      <div className="mainContainer">
        <div className="navMenu">
          <Icon className="leftIcon" source="ironhack-logo.svg"/>
          <Icon className="rightIcon" source="menu-top.svg"/>
        </div>
        <TitleText type="h1" className="mainTitle">Say hello to ReactJS</TitleText>
        <Text className="mainText">You will learn a Frontend framework from scratch, to become a ninja Developer.</Text>
        <Button className="mainButton">Awesome!</Button>
      </div>
    )
  }
}

export default MainCointainer;