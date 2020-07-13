import React from 'react';
import logo from './../../public/images/ironhack-logo.svg'



import './Logos.css';

function Logos(props) {
    return (

        <article className="Article">

            <img src={props.img} className="Navbar-logo" alt="logo" />
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>

        </article>

    );
}

export default Logos;
