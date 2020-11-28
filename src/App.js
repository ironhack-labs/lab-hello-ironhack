import React, {Component} from "react";
import "./App.css";
import Hero from './components/Hero';
import CardList from './components/CardList';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {

    const heroTitle = 'Say hello to ReactJS';
    const heroText =`You will learn how to use the most popular frontend library and become a super Ninja Developer`;

    const data = [
          {
              title: "Declarative",
              img: "./images/icon1.png",
              description: "React makes it pailess to create interactive UIs"
          },
          {
              title: "Components",
              img: "./images/icon2.png",
              description: "Build encapsulated components that manage their state"
          },
          {
              title: "Single-Way",
              img:"./images/icon3.png",
              description: "A set of immutable values are passed to the component's"
          },
          {
              title: "JSX",
              img: "./images/icon4.png",
              description: "Statically-typed designed to run on modern browsers"
          }
    ];

      return(
          <div className="App">
              <Navigation logo='./images/ironhack-logo.svg' menu='./images/menu-top.svg' />

              <Hero title={heroTitle} text={heroText} button='Awesome!'/>

              <section id="advantages">
                  {data.map((item,index) => 
                      <CardList key={index} img={item.img} title={item.title} description={item.description} />
                  )}
              </section>

          </div>
      )
  }
}

export default App;
