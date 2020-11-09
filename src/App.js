import React, { Component } from "react";
import "./App.css";

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';
const ihLogo = '/images/ironhack-logo.svg';
const reactLogo = '/images/react-logo.svg';
const menuBarImage = '/images/menu-top.svg';

class App extends Component {
    render() {
      const title = (says) =>{
          return `${says.first}`;
      };
      const title2 = (says) =>{
        return ` ${says.two}`;
    };

      const says = {
        first: "Say hello to React JS",
        two: "You will learn how to use the most popular frontend library, and become a super Ninja developer",
      };

      const element = <h2>{title(says)}</h2>
      const element2 = <h3>{title2(says)}</h3>
      return (
        <section>
            <div className="section1">
                <div className="topVar">
                    <div>
                        <img src ={ihLogo} />
                    </div>

                    <div>
                        <img src ="/images/menu-top.svg" />
                    </div>
                </div>

                <div className="details-top">
                    <div className="details-top-div">
                        <div className="details1">
                            {element}
                        </div>

                        <div className="details2">
                            {element2}
                            <button>Awesome!</button>
                        </div>
                    </div>

                    <div className="details-top-div3">
                        <img src ="/images/react-logo.svg" />
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="div-section2">
                    <img src={icon1} />
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>

                <div className="div-section2">
                    <img src={icon2} />
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>

                <div className="div-section2">
                    <img src={icon3} />
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>

                <div className="div-section2">
                    <img src={icon4} />
                    <h3>JSX</h3>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div> 
            </div>
        </section>
      );
    };   
}
  
  export default App;
  