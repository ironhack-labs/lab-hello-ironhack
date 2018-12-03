import React, { Component } from "react";
import "./content.css";
import Card from "../card/card"

class Content extends Component {
  constructor() {
    super()
    
  }

  render(){ 
    const card = [
    {
      image: "/images/icon1.png",
      title: "Declarative",
      text: "React makes it painless to create interactive Uls"
    },
    {
      image: "/images/icon2.png",
      title: "Components",
      text: "React makes it painless to create interactive Uls"
    },
    {
      image: "/images/icon3.png",
      title: "Single-Way",
      text: "React makes it painless to create interactive Uls"
    },
    {
      image: "/images/icon4.png",
      title: "JSX",
      text: "React makes it painless to create interactive Uls"
    }
  ];
    return(
      
      <div className="cardsContainer">
      {card.map((card)=>{
        return (
        
      <Card image={card.image} title={card.title} text={card.text}></Card>
     
        )
      }
      )}
      </div>
    )
  }
}
export default Content;