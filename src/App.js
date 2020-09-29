import React from "react";
import "./assets/style.css";

function App() {
    return <div className="div-mother">
        <div className="top-div">
            <div>
                <header>
                    <img className="ironhack-logo" src="./images/ironhack-logo.svg" alt="Ironhack-Logo"/>
                    <img src="./images/menu-top.svg" alt="hamburguer-menu"/>
                </header>
                <div >
                    <h1 className="h1-top-div">Say hello to ReactJS</h1>
                    <p className="p-top-div">You wil learn how to use <br/> the most popular frontend library,<br/> and become a super Ninja developer</p>
                </div>
                <button>Awesome!</button>
            </div>
        </div>
        <div className="bottom-div"> 
            <div>
            <img src="./images/icon1.png" alt="icone"/>
            
            </div>
            <img src="./images/icon2.png" alt="icone"/>
            <img src="./images/icon3.png" alt="icone"/>
            <img src="./images/icon4.png" alt="icone"/>
            
        </div>
    </div>
    
};
  
  export default App;