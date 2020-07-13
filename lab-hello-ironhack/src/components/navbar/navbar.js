import React from 'react'

import './navbar.css'
import ironhack_logo from '../../images/ironhack-logo.svg'
import navIcon from '../../images/menu-top.svg'


const NavBar = () => {

        return (

            <div callName='container'>
              <nav className='row justify-content-between'>
              <div className='col-6'>
                        <img src={ironhack_logo} alt="logo"></img>               
              </div>

             <div className='col-6 text-right' >

                       <img src={navIcon} alt="navicon"></img>       
             </div> 


              </nav> 
        </div>
        
)}

export default NavBar