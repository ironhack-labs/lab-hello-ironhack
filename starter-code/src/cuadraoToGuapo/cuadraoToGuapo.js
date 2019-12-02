import React from "react";
export default class CuadraoToGuapo extends React.Component {
  render() {
    return (
      <div style={{width: 200, height: 100}}>
        <img class="img-react" src={this.props.img}></img>
        <p class="text1">{this.props.text1}</p>
        <p class="text2">{this.props.text2}</p>

      </div>
    );
  }
}
