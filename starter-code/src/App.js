import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {

        const IHlogo = "/images/ironhack-logo.svg"
        const menu = "/images/menu-top.svg"
        const header = <p>Say hello to <br></br> ReactJS</p>
        const subheader = <p> You will learn a frontend <br></br>
        framework from scratch, to <br></br>
        become a Ninja Developer. </p>
        
        const cards = [
            {
                img: "/images/icon1.png",
                textHeadline: "Declarative",
                text: <p>React makes it <br></br>painless to create</p>
            },
            {
                img: "/images/icon2.png",
                textHeadline: "Components",
                text: <p>React makes it <br></br>painless to create</p>
            },
            {
                img: "/images/icon3.png",
                textHeadline: "Single-Way",
                text: <p>React makes it <br></br>painless to create</p>
            },
            {
                img: "/images/icon4.png",
                textHeadline: "JSX",
                text: <p>React makes it <br></br>painless to create</p>
            }
        ]
       
        return (
            <div className="App">

                <div className="Blackbox">
                    <div className="Nav">
                        <img src={IHlogo}></img>
                        <img src={menu}></img>
                    </div>
                    <div className="Text">

                        <div>
                            <h1 className="Say"> {header} </h1>
                        </div>
                        <div className="capt">
                            <h4>{subheader}</h4>
                        </div>
                        <div className="But">
                            <button>Awesome!</button>
                        </div>
                    </div>
                </div>
               
                <div className="Cards">

               { cards.map(card => {
            return (
              <div className="Cardcontent">
                  <img src={card.img} ></img>
                <h1> {card.textHeadline}</h1>
               <h4> {card.text}</h4>
               </div> 
              
            );})}

          
                </div>
            </div>
        );
    }
}

export default App;