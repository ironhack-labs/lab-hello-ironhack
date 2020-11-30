import React from 'react'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import "./components/styles/Styles.css"

class App extends React.Component {
    card1 = { 
        image: "/images/icon1.png",
        title: "Declarative",
        description: "React makes it pailess to create interactive UIs"
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
        description: "Statically-typed designed to run on modern browsers"
    }

    render(){
        return (
          <div className="App">
            <Navbar />
            <Header />
            <section id="cards-holder" >
            <Card image={this.card1.image} title={this.card1.title} description={this.card1.description}/>
            <Card image={this.card2.image} title={this.card2.title} description={this.card2.description}/>
            <Card image={this.card3.image} title={this.card3.title} description={this.card3.description}/>
            <Card image={this.card4.image} title={this.card4.title} description={this.card4.description}/>
            </section>
          </div>
        )
      }
    
}

export default App