import React from 'react'
import './footer.css'
import Cards from '../cards/cards'

const Footer= props =>{
    return(
        <footer className="footer">

            <Cards 
            image='./images/icon1.png'
            title= "Declarative"
            text= "React makes it painless to create interactive UIs"
            ></Cards>

            <Cards
                image='./images/icon2.png'
                title="Components"
                text="Build encapsulated components that manage their state"
            ></Cards>

            <Cards
                image='./images/icon3.png'
                title="Single-Way"
                text="A set of immutable values are passed to the components"
            ></Cards>

            <Cards
                image='./images/icon4.png'
                title="JSX"
                text="Statically-typed, designed to run on modern browsers"
            ></Cards>

        </footer>
    )
}
export default Footer