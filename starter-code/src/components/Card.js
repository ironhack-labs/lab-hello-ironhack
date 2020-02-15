import React, { Component } from "react";
import "../App.css";

class Card extends Component {
    render() {
        return (
            <div className="card">
               <div className="card-interna">
                    <img className="icon" src="../images/icon1.png"></img>
                    <h3>Declarative</h3>

                    <h5> React makes it <br></br>  painless to create <br></br>  interactive UIs.</h5>

                
                  
               </div>
                <div className="card-interna">  <img className="icon" src="../images/icon2.png"></img>
                    <h3>Components</h3>
                    <h5> React makes it <br></br>  painless to create <br></br>  interactive UIs.</h5>
                </div>
                <div className="card-interna">  <img className="icon" src="../images/icon3.png"></img>
                    <h3>Single-Way</h3>
                    <h5> React makes it <br></br>  painless to create <br></br>  interactive UIs.</h5>
                </div>
                <div className="card-interna">  <img className="icon" src="../images/icon4.png"></img>
                    <h3>JSX</h3>
                    <h5> React makes it <br></br>  painless to create <br></br>  interactive UIs.</h5>
                </div>
            </div>

        );
    }
}


export default Card;