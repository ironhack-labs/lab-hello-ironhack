import React from 'react'
import Brand from './Header-components/Brand'
import MenuIcon from './Header-components/MenuIcon'
import './HeaderMain.css';

export default function HeaderMain() {
    return (
        <header>
            <Brand />
            <MenuIcon />
        </header>
    )
}