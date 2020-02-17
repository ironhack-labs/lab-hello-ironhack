import React from 'react';
import Img from "./Img"
import TextHeader from "./TextHeader"
import Button from "./Button"
import "./styles/header.css";

export default function Header() {
    return (
        <div className="header">
        <nav>
        <Img url="../images/ironhack-logo.svg"/>
        <Img url="../images/menu-top.svg"/>
        </nav>
        <TextHeader title="Say Hello to ReactJs">You will elarn a Frontend Framework from scratch, to become a Ninja developer</TextHeader>
        <Button>Awesome!</Button>
        </div>
    )
}
