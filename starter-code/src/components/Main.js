import React, { Component } from "react";
//import "../../stylesheets/App.ccs";

class Block extends Component{
  render(){
    return (
      <div className="container">
        <img src={this.props.img}/>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.text}</p>
      </div>
    )
  }
}


class Main extends Component {
  render() {
    return (

      <div className="Main">
        <Block img="images/icon1.png" 
              subtitle="Declarative" 
              text="React makes it painless to create interactive UIs">
        </Block>
        <Block img="images/icon2.png" 
              subtitle="Components" 
              text="Build encapsulated components that manage their states.">
        </Block>
        <Block img="images/icon3.png" 
              subtitle="Single Way" 
              text="A way of immutable values are passed to the compenents.">
       </Block>
       <Block img="images/icon4.png" 
              subtitle="JXS" 
              text="Statically typed, designed to run on modern browsers.">
       </Block>
      </div>     
    );
  }
}

export default Main;