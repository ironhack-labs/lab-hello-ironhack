import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";


export default class App extends Component {
    render () {
        const logo1 = "./images/icon1.png"

        const data = [
            {
                title: "Declarative",
                description: "React makes it painless to create interactive Uls",
                img: "./images/icon1.png"
            },

            {
                title: "Components",
                description: "Build encapsulated components that manage their state.",
                img: "./images/icon2.png"
            },

            {
                title: "Single-Way",
                description: "A set of immutable values are passed to the component's.",
                img: "./images/icon3.png"
            },

            {
                title: "JSX",
                description: "Statically-typed designes to run on modern browsers.",
                img: "./images/icon4.png"
            }
        ]


        return(
            <div className="Content">
                <h1>Functional</h1>
                <img src={logo1} width="100px" height="100px"/>

                <CardList
                title="This is the title"
                description="This is the description"
                img="{logo1}"
                />
            {data.map((item, index) => 
                <CardList key={index} title={item.title} desc={item.description} img={item.img}/>
            )}
            </div>
        );
    }
}