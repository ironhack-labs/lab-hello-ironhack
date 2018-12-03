import React from "react";
import "./App.css";
import "./components/Navbar/Navbar.js"
import Navbar from "./components/Navbar/Navbar";
import "./components/Section/Section.js"
import Section from "./components/Section/Section";
import "./components/Article/Article.js"
import Article from "./components/Article/Article";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            Article1: {
                title: 'Declarative',
                text: 'React makes it painless to create interactive UIs',
                image: '/images/icon1.png'
            },
            Article2: {
                title: 'Components',
                text: 'Build encapsulated components that manage their state',
                image: '/images/icon2.png'
            },
            Article3: {
                title: 'Single-Way',
                text: 'A set of immutable values are passed to the components',
                image: '/images/icon3.png'
            },
            Article4: {
                title: 'JSX',
                text: 'Statically-typed designed to run on modern browsers',
                image: '/images/icon4.png'
            }
        }

    }

    render() {

        return (
            <div className="App">
                <div className="blue-section">
                    <Navbar></Navbar>
                    <Section></Section>
                </div>

                <div className="white-section">
                    <Article image={this.state.Article1.image} title={this.state.Article1.title} text={this.state.Article1.text}></Article>
                    <Article image={this.state.Article2.image} title={this.state.Article2.title} text={this.state.Article2.text}></Article>
                    <Article image={this.state.Article3.image} title={this.state.Article3.title} text={this.state.Article3.text}></Article>
                    <Article image={this.state.Article4.image} title={this.state.Article4.title} text={this.state.Article4.text}></Article>

                </div>
            </div>
        );
    }
}

export default App;