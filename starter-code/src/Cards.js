import React, { Component } from "react";



class Cards extends Component{
  render(){
    return(
    <section class="cards_down">
        <div class="card">
          <img src="./images/icon1.png"></img>
          <h3> Declarative </h3>
          <h4> React makes it painless to create interactive UIs </h4>
        </div>
        <div class="card">
          <img src="./images/icon2.png"></img>
          <h3> Declarative </h3>
          <h4> React makes it painless to create interactive UIs </h4>
        </div>
        <div class="card">
          <img src="./images/icon3.png"></img>
          <h3> Declarative </h3>
          <h4> React makes it painless to create interactive UIs </h4>
        </div>
        <div class="card">
          <img src="./images/icon4.png"></img>
          <h3> Declarative </h3>
          <h4> React makes it painless to create interactive UIs </h4>
        </div>
    </section>
    );
  }
}

export default Cards;
