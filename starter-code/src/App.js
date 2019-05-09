import React, {Component} from "react";
import Grey from "./Grey.js"
import Elements from "./Elements.js"
import "./App.css";


class App extends Component {
  render(){

    const el1 = {
      image: '../images/icon1.png',
      title: 'Declarative',
      description: 'React makes it painlessto create interactive UIs.',
    }

    const el2 = {
      image: '../images/icon2.png',
      title: 'Components',
      description: 'Build encapsulated components that manage their state.',
    }

    const el3 = {
      image: '../images/icon3.png',
      title: 'Single-Way',
      description: 'A state of immutable values are passed to the components',
    }

    const el4 = {
      image: '../images/icon4.png',
      title: 'JSX',
      description: 'Statically-typed, designed to run on a modern brouwsers.',
    }

    return (
       <div >
         <Grey />

        <div className="el-list">
        <Elements element={el1}/>
        <Elements element={el2}/>
        <Elements element={el3}/>
        <Elements element={el4}/>
        </div>
       </div>
       )
      }
    }

export default App;