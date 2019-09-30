import React, { Component } from "react";

const blocksArr = [
  {
    image: "images/icon1.png",
    words: "Declaritive",
    sentence: "React makes it painless to create interactive UIs."
  },
  {
    image: "images/icon2.png",
    words: "Components",
    sentence: "Build encapsulated components that manage their state."
  },
  {
    image: "images/icon3.png",
    words: "Single-Way",
    sentence: "A set of immutable values are passed to the components"
  },
  {
    image: "images/icon4.png",
    words: "JSX",
    sentence: "Statically-typed, designed to run on modern browsers."
  }
];

class Block extends Component {
  render() {
    return (
        <div id="blocks" className="row">
        {
          blocksArr.map((block, i) => {
            return <div className="block col">
              <img src={block.image} alt=""></img>
              <h4>{block.words}</h4>
              <p>{block.sentence}</p>
              </div>
          })
        }
      </div>
    );
  }
}

export default Block;
