import React, { Component } from "react";
import "./App.css";

const links = [
    { title: "Déclarative", description: "React make it painless to create interartive UI", img: "/images/icon1.png" },
    { title: "Components", description: "Build encapsulated components that manage their state", img: "/images/icon2.png" },
    { title: "Single-way", description: "A set of immutable values are passed to the component's", img: "/images/icon3.png" },
    { title: "JSX", description: "Statically-typed, designed to run on modern browsers", img: "/images/icon4.png" }
];


class App extends Component {
    render() {
        return (
            <div className="section">
                <div className="header">
                    <nav className="nav">
                        <a href="https://www.ironhack.com/bootcamp/fr/formation/developpeur-web/full-time/paris?utm_medium=cpc&utm_source=google&utm_campaign=web-dev-bootcamp-par-fr-search&utm_content=brand-campaign&gclid=EAIaIQobChMI5ICg653F4AIVB4jVCh1_PAZCEAAYASAAEgINSPD_BwE"><img src="/images/ironhack-logo.svg" /></a>
                        <a href="#"><img src="/images/menu-top.svg" /></a>
                    </nav>
                    <article>
                        <h1>Say hello to ReactJs</h1>
                        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                        <a className="aw-btn" href="#">Awesome !</a>
                    </article>
                </div>

                <div className="links">
                    <ul>
                        {links.map(link => {
                            return <li><img src={link.img}/> <h3>{link.title}</h3> <p>{link.description}</p> </li>
                        })}
                    </ul>
                </div>   
            </div>
        );
    }
}
export default App;