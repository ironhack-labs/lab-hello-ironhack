import React, {
    Component
} from 'react';
import "./App.css";

import ContentCard from "./components/Card";

export default class App extends Component {

    render(){
        const cards = [{
            pic: "/images/icon1.png",
            title: "Declarative",
            description: "React makes it painless to create interactive UIs."
        },
        {
            pic: "/images/icon2.png",
            title: "Components",
            description: "Build encapsulated components that manage their state."
        },
        {
            pic: "/images/icon3.png",
            title: "Single-Way",
            description: "A set of immutable values are passed to the component's."
        },
        {
            pic: "/images/icon4.png",
            title: "JSX",
            description: "Statically-typed, designed to run on modern browsers."
        }
    ];
        return(
            <div className="App">
                <section className="head">
                    <div className="topMenu">
                    <img src={"/images/ironhack-logo.svg"} alt="Logo" />
                    <img src={"/images/menu-top.svg"} alt="Logo" />
                    </div>
                    <h1 className="title">Say hello to <br></br> ReactJS</h1>
                    <p>You will learn a Frontendhow to use <br></br> the most popular frontend library,<br></br> and become a super Ninja developer.</p>
                    <button className="button"><h3>Awesome!</h3></button>
                </section>
                <section className="body">
                    {cards.map((card,index_card)=>(
                        <ContentCard
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
