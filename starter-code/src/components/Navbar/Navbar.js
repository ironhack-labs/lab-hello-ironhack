import React from 'react'

import {NavWrapper, IronLogo, Menu } from './Navbar.styled';

const Navbar = () => (
    <NavWrapper>
        <IronLogo src="/images/ironhack-logo.svg"/>
        <a><Menu src="/images/menu-top.svg"/></a>
    </NavWrapper>
)

export default Navbar;