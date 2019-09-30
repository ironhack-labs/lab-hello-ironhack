import React, { Component } from "react";
import "./App.css"



const carding = [ {
  image: "images/icon1.png",
  words: 'Declaritive',
  sentence: 'React makes it painless to create interactive UIs.'
},
{
  image: 'images/icon2.png',
  words: 'Components',
  sentence: 'Build encapsulated components that manage their state.'
},
{
  image: 'images/icon3.png',
  words: 'Single-Way',
  sentence: 'A set of immutable values are passed to the components'
},
{
  image: 'images/icon4.png',
  words: 'JSX',
  sentence: 'Statically-typed, designed to run on modern browsers.'
},
]


class Cards extends Component {
  render() {
    return (

      <div id="cards">
        {
          carding.map((cardinfo, i) => {
            return <div class="card">
              <img src={cardinfo.image}></img>
              <h2>{cardinfo.words}</h2>
              <p>{cardinfo.sentence}</p>
              </div>
          })
        }
      </div>
    )
  }
}




export default Cards;