import React, { Component } from "react";
import "./section.css";

class Section extends Component {

  items = [
    {
      image: "../images/icon1.png",
      title: "Declarative",
      subtitle: "React mekes it painless to create interactive UIs."
    },
    {
      image: "./images/icon2.png",
      title: "Components",
      subtitle: "Build encanpsulated components that manage their state."
    },
    {
      image: "./images/icon3.png",
      title: "Single-Way",
      subtitle: "A set of inmutable values are passed to the components."
    },
    {
      image: "./images/icon4.png",
      title: "JSX",
      subtitle: "Statically-typed, designed to run on modern browsers."
    },
  ];

  render() {
    return (
      <div className="section">
        {this.items.map(element=>{
          return(<div className="article" >
            <img src={element.image} alt="1"/>
            <h4>{element.title}</h4>
            <p>{element.subtitle}</p>
          </div>)
        })
        }
      </div>
    );
  }
}

export default Section;
























// {array.forEach(ele => {
//   return ( 
//     <div>
//       <img src={ele.img} alt=""/>
//     </div>
//   )

// })}