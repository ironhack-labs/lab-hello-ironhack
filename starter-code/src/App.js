import React from "react";
import  "./App.css"
import logo from "../public/images/ironhack-logo.svg";
import menu from "../public/images/menu-top.svg";
import icon1 from "../public/images/icon1.png";
import icon2 from "../public/images/icon2.png";
import icon3 from "../public/images/icon3.png";
import icon4 from "../public/images/icon4.png";



class App extends React.Component {
  render() {
    return (
        <div>
          <div className="top-container">
            <div className= "header">
              <img className="logo" src={logo} alt=""/>
              <img className="menu" src={menu} alt=""/>
            </div>

            <div className="title">
              <h1>Say hello to <br/> ReactJS</h1>
              <h3>You will learn a frontend <br/> framework from scratch, to <br/> becaome an Ninka Developer</h3>
              <button>Awesome!</button>
            </div>

          </div>
            
          <div className="options">
          <div className="columns">
                <img src={icon1} />
                <h4>Declarative</h4>
                <p>React makes it <br/> paintless to create <br/> interactive UIs.</p>
            </div>
            <div className="columns">
                <img src={icon2} />
                <h4>Components</h4>
                <p>Build encapsulated <br/> components that <br/> manager their state.</p>
            </div>
            <div className="columns">
                <img src={icon3} />
                <h4>Single-Way</h4>
                <p>A set of immnutable <br/> values are passed to <br/> the component's.</p>
            </div>
            <div className="columns">
                <img src={icon4} />
                <h4>JSX</h4>
                <p>Statically-typed, <br/> designed to run on <br/> modern browsers.</p>
            </div>
          </div>
            

        </div>
       
    )
  }
}
export default App;