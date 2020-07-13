import React, { Component } from 'react'
import './nav.css'
import IronhackLogo from '../../images/ironhack-logo.svg'
import menuTop from '../../images/menu-top.svg'

class Nav extends Component{

    render() {

       return (

           <nav className = "inicio">
               <img src={IronhackLogo}/>
               <img src={menuTop} />
           </nav>

       )
    }
    
}

export default Nav