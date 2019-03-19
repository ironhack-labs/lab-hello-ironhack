import React, { Component } from "react"

import './App.css'
import Info from "../components/info";

//import  from '../components/User'
//import  from '../components/Title'

class App extends Component {

    render() {

        const avatar = <img src="../images/ironhack-logo.svg"/>
        const menu = <img src="../images/menu-top.svg"/>

        const info1 = {
          avatar: '/images/icon1.png',
          title: 'Declarative',
          description: 'React makes it painless to create interactive UIs',
        },
         info2 = {
          avatar: '/images/icon2.png',
          title: 'Components',
          description: 'Built encapsulated components that manage their state',
        },
        info3 = {
          avatar: '/images/icon3.png',
          title: 'Single-way',
          description: 'A set of immutable values are passed to the components.',
        },
        info4 = {
          avatar: '/images/icon4.png',
          title: 'JSX',
          description: 'Statiscally-typed, designed to run on modern browsers.',
        }

        return (
        <main className="root">
          <section className="container">

          
          <article className="header">
            {avatar}
            {menu}
          </article>

          <article className="hello">
            <h1>Say Hello to ReactJS</h1>
            <p className="description">You will learn a Frontend Framework from scratch, to become a ninja developer</p>
            <p className="button">
              Awesome
            </p>
          </article>

          </section>

          <section>
              <article className="info">
                
                <Info {...info1} />
                <Info {...info2} />
                <Info {...info3} />
                <Info {...info4} />
                
              </article>
          </section>

        </main>
        )
    }
}

export default App