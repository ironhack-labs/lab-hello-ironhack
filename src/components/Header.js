import React from 'react'
import HeaderText from './HeaderText.js'
import HeaderLogosBig from './HeaderLogosBig.js'
import HeaderLogosSmall from './HeaderLogosSmall.js'
import './styles/Header.css'

const header = () => {
    return (
        <header className="Header">
            <HeaderText />
            <HeaderLogosBig />
            <HeaderLogosSmall />
        </header>
    )
}

export default header