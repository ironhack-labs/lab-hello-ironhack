import React, {Component} from "react";
import ReactDOM from "react-dom";
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="container">
            
            <div className="icon1">
            <img src="/images/icon1.png"></img>
            <h2>Declarative</h2>
            <p>React makes it  <br></br>painless to create <br></br>interactive UIs.</p>
                </div>
                
                <div className="icon2">
                    <img src="/images/icon2.png"></img>
                     <h2>Components</h2>
                         <p>Build encapsulated <br></br>that manage their state.</p>
                         </div>
                         <div className="icon3">
                   
                    <img src="/images/icon3.png"></img>
                     <h2>Single-Way</h2>
                         <p>Asset of inmutable <br></br>values are passed <br></br>to the components.</p>
                         </div>
                         <div className="icon4">
                    
                    <img src="/images/icon4.png"></img>
                     <h2>JSX</h2>
                         <p>Statically-typed <br></br>designed to run <br></br>on modern browsers</p>
                         </div>


            </div>
        )
    }
}


export default Footer;