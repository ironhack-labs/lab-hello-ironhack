import React, {Component} from "react"
import "./App.css"
import Header from "../components/Header"
import Box from "../components/Box"


class App extends Component {
    render() {
        const box1 ={
          title: "Declarative",
          text: "React makes it painless to create interactive UIs.",
          url: "/images/icon1.png"
           },
           box2 ={
            title: "Components",
            text: "Build encapsulated components that manege their state.",
            url: "/images/icon2.png"
             },
            box3 ={
                title: "Single-Way",
                text: "A set of immutable values are passed to the componnet'S",
                url: "/images/icon3.png"
                 },
            box4 ={
          title: "JSX",
          text: "Statically-typed, designed to run on modern browsers.",
          url: "/images/icon4.png"
           }

      return (

        <main className="App">
        
          <Header text = "Say hello to ReactJS"/>
         <span className="box-container">
          <Box {...box1} />
          <Box {...box2} />
          <Box {...box3} />
          <Box {...box4} />
          </span>
        </main>
     )
    }
  }

  



  
  export default App
  
  