import React, { Component } from "react";
// import "./App.css";

import Navbar from "./components/Navbar";
import BodyMain from "./components/BodyMain";
import FooterElement from "./components/FooterElement";
import "../public/stylesheets/style.css";


class App extends Component {
  constructor(props){
  super(props);

  this.cards = [
    {
      title:"Declarative",
      image:"/images/icon1.png",
      text:"React makes it painless to create interactive UIs."
    },
    {
      title:"Components",
      image:"/images/icon2.png",
      text:"Build encapsulated componentes that manage their state."
    },
    {
      title:"Single-Way",
      image:"/images/icon3.png",
      text:"A set of inmutable values are passed to the component's."
    },
    {
      title:"JSX",
      image:"/images/icon4.png",
      text:"Statically-typed desinged to run on modern browsers"
    },
  ]
}
 render() {
   return (
     <div className="App">
       <header className="header">
       <Navbar/>

       </header>
       <div className="bodyContainer">  
       <BodyMain/>
       </div>
       <footer className="reactFooter">
      {
        this.cards.map((card, i) => {
          return <FooterElement
            key={i} 
            card = {card}
          />
        })
      }
      </footer>
    

     </div>
   );
 }
}

export default App;