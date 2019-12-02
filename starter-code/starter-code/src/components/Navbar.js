import React from 'react'
import Nav from './styles/Nav.css'


function Navbar(props) {
    return (
        <div className='Nav'>
            <img src={props.logo}></img>
            <img src={props.bar}></img>
            
        </div>
    )
}

export default Navbar