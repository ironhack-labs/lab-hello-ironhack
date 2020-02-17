import React from 'react';
import Nav from './nav'

export default function Main() {
    return (
        <div className="Main">
            <Nav logoIronhack="./../images/ironhack-logo.svg" menuLogo="./../images/menu-top.svg"></Nav>
            <div>
            <h1>Say hello to <br/>ReactJS</h1>
            <p>You will learn a Frontend <br/>framework from scratch, to <br/>becaome an Ninka Developer.</p>
            </div>
            <button>Awesome !</button>
            <img src="./../images/react-logo.svg" id="reactLogo1"/>
            <img src="./../images/react-logo.svg" id="reactLogo2"/>
            <img src="./../images/react-logo.svg" id="reactLogo3"/>
            <img src="./../images/react-logo.svg" id="reactLogo4"/>
        </div>
    )
}
