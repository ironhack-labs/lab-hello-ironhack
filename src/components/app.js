import React from 'react'
import Nav from './Nav/nav'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import SectionCard from '../components/Sections/sections'

const App = () => {
    return (
        <main>
            <Nav/>
            
            <div className = "principal" >
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become an Ninka Developer</p>
                <a href="#">Awesome!</a>
            </div>

            <section className="background-icons">
                <div className = "icons">
                    <SectionCard img = {icon1} h2 = "Declarative" p = "React makes it painless to create interactive UIs."/>
                    <SectionCard img = {icon2} h2 = "Components" p = "Build encapsulated components that manage their state."/>
                    <SectionCard img = {icon3} h2 = "Single-Way" p = "A set of immutable values are passed to the component's."/>
                    <SectionCard img={icon4} h2="JSX" p="Staticalli-typed. designed to run on modern browsers."  />
                </div>
            </section>
           
        </main>
    )
}

export default App