import React from 'react'
import { HeaderContainer } from './Header.styled'

import logo from '../../images/ironhack-logo.svg'
import menuTop from '../../images/menu-top.svg'

export default function header() {
    return (
        <HeaderContainer>
            <img src={logo} />
            <img src={menuTop} />
        </HeaderContainer>
    )
}
