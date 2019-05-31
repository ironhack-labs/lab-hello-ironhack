import React, { Component } from "react";
import "./App.css";
import Icon from "./Icon";
import TitleText from "./TitleText";
import Text from "./Text";

class IndividualContainer extends Component {
  render () {
    const { titleText, text, imageSource } = this.props;
    return (
      <div className="individualContainer">
        <Icon className="infoImage" source={imageSource}/>
        <TitleText type="h2" className="infoTitleText">{titleText}</TitleText>
        <Text className="infoText">{text}</Text>
      </div>
    );
  }
}

export default IndividualContainer;