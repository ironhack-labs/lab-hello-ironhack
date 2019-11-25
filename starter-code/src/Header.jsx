import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header id="header-main">
            <img className="ironhack-logo" src="/images/ironhack-logo.svg" alt="icone ironhack" />
            <img className="menu-top" src="/images/menu-top.svg" alt="icone menu" />
        </header>
    );
}