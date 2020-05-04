import React from 'react'
import Title from "./Title";
import SubText from "./SubText";
import Button from "./Button";

function nav(props) {
    return (
      
  <div>     
<nav className="flex nav">
<img src="/images/ironhack-logo.svg" id="logo"/>
<img src="/images/menu-top.svg" id="menu"/>
</nav>
<div className="test">
        <Title />
        <SubText />
        <Button />
</div>
</div> 
    )
}

export default nav
