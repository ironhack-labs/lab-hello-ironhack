import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
    render(){
    
        const data = [
            { 
            image: "/images/icon1.png",
            title: "Declarative",
            description: "React makes it painless to create interactive UIs"
             },
             {
             image: "/images/icon2.png",
             title: "Components",
             description: "Build encapsulted components that manage their state."
            },
            {
            image: "/images/icon3.png",
             title: "Single-Way",
             description: "A set of immutable values are passed to the component's."
            },
            {
            image: "/images/icon4.png",
             title: "JSX",
             description: "A set of immutable values are passed to the component's"
            }
        ]
        const card = data.map(card =>{
            return (
                <Card image = {card.image}
                title = {card.title}
                description = {card.description}
                ></Card>
            )
        });


        return (
            <div>

                <div className="backgroundMain">
                <div className="nav">
                    <img src="/images/ironhack-logo.svg"/>
                    <img src="/images/menu-top.svg"/>
                </div>

                <div className="main">

                    <div className="contaierText">
                        <h1 className="h1">Say hello to<br/> ReactJs</h1>
                        <p>You wil learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
                        <div className="btnContainer">
                            <button className="btn" type="submit">Awesome!</button>
                        </div>
                    </div>
                    
                    <div className="logoReact">
                        <img className="logo1" src="/images/react-logo.svg" />
                        <img className="logo2" src="/images/react-logo.svg" />
                        <img className="logo3" src="/images/react-logo.svg" />
                    </div>
                </div>
            </div>

            <div className="cardsContainer">
                <div className="cards">
                     {card}
                </div>
                   
            </div>
        </div>
        );
    }
}

export default App;
