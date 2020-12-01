import React from 'react'
import './styles/Header.css'
import Navbar from './Navbar'
import Main from './Main'

const Header = () => {
    return (
        <div className="Header">
            <Navbar />
            <Main />

        </div>
    )
}

export default Header