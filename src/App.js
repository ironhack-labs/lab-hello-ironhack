import React from 'react'
import Card from "./components/Card"
import "./components/styles/App.css"

class App extends React.Component {

    card1 = { 
        image: "/images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs"
    }

    card2 = { 
        image: "/images/icon2.png",
        title: "Components",
        description: "Build encapsulted components that manage their state."
    }

    card3 = { 
        image: "/images/icon3.png",
        title: "Single-Way",
        description: "A set of immutable values are passed to the component's."
    }

    card4 = { 
        image: "/images/icon4.png",
        title: "JSX",
        description: "A set of immutable values are passed to the component's"
    }


    render(){
        return (
            <div id="body">

                    <div className="backgroundMain">
                    <div className="nav">
                        <img src="/images/ironhack-logo.svg"/>
                        <img src="/images/menu-top.svg"/>
                    </div>

                    <div className="main">

                        <div className="contaierText">
                            <h1 className="h1">Say hello to<br/>ReactJS</h1>
                            <p>You wil learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
                            <div className="buttonContainer">
                                <button className="button" type="submit">Awesome!</button>
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
                    <Card image={this.card1.image} title={this.card1.title} description={this.card1.description}/>
                    <Card image={this.card2.image} title={this.card2.title} description={this.card2.description}/>
                    <Card image={this.card3.image} title={this.card3.title} description={this.card3.description}/>
                    <Card image={this.card4.image} title={this.card4.title} description={this.card4.description}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
