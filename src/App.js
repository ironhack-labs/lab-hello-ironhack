import React, {Component} from 'react'
import './App.css'
import Card from './components/Card';



export default class App extends Component {

    render(){

        const cards = [{
            pic:"/images/icon1.png",
            title:"Declarative",
            description:"React makes it painless to create interactive Uis"
        },
        {
            pic:"/images/icon2.png",
            title:"Components",
            description:"Build encapsulated components that manage their state"
        },
        {
            pic:"/images/icon3.png",
            title:"Single-Way",
            description:"A set of immutable values are passed to the component's"
        },
        {
        pic:"/images/icon4.png",
            title:"JSX",
            description:"atatically-typed, designed  to run on modern browser"
        }
        ];
        return(
            <div className="App">
                <section className="head">
                    <div className="logo">
                    <img src="/images/ironhack-logo.svg"></img>
                    </div>
                    <div className="menu">
                    <img src="/images/menu-top.svg"></img>
                    </div>
                    <h1 className ="hello">Say hello to ReactJS</h1>
                    <h3 className="text">You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
                    <button className="awesome"><h3>Awesome!</h3></button>
                </section>
                <section className="body">
                   {cards.map((card,index_card)=>(
                        <Card
                        key={index_card}
                        pic={card.pic}
                        title={card.title}
                        description={card.description}
                        />
                   ))}
                </section>

            </div>
        )
    }
}