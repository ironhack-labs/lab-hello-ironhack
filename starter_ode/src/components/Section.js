import React, { Component } from "react";

class Section extends Component {
    render() {
      return (
        <div className="background containerSection">
            <div className="containerText">
                <h1>Say hello to <br></br> React JS</h1>
                <p>You will learn a Frontend <br></br> framework from scratch, to <br></br> become a Ninja Developer</p>
                <button>Awesome!</button>
            </div>

            <div className="containerImage">
                <img src="/images/react-logo.svg" alt="react logo"></img>

            
            </div>

        </div>
      );
    }
  }


export default Section;




