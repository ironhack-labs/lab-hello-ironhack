import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import './Main.css'
import Footer from '../Footer/Footer'




class Main extends Component {

  listOfThings = () => {
    let myList = ["Video Games", "Coding", "Food"]
    return (myList.map((eachThing, i) => {
      return (
        <li key={i}>{eachThing}</li>
      )
    })
    );
  }

  render() {
    return (

      <div className="Main">
        <Nav />
        <h1>Mike's Page</h1>

        <ul>
          {this.listOfThings()}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Main;