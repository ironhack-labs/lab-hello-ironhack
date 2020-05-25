import React from 'react'

export default function Header() {
    const logo = <img src="/images/ironhack-logo.svg" alt="logo img"></img>
    const topMenu = <img style={menuImg} src="/images/menu-top.svg" alt="logo img"></img>
    return (
        <div className="nav">
            {logo}{topMenu}
        </div>
    )
}
const menuImg = {
    width: "30px",
    maxWidth: '100%'
}