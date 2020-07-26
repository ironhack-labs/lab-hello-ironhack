import React from 'react'
import Boton from './Boton'
import NavBar from './NavBar'

const Jumbotron = props => {
    return (
        <div className="ironHero">
             <NavBar/> 
            <h1 className="">Say Hello to</h1>
            <h1>ReactJS</h1>
            <p>You will learn FrontEnd framework from scracth, to become an Ninka Developer.</p>
            <Boton >
                Awesome!
            </Boton>
        </div>
        
    )
}


export default Jumbotron
