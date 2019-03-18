import React from "react"


function Header(props) {



return (
<main className="header">


<span className= "images">
<img className= "logo" src="/images/ironhack-logo.svg"/>
<img className="menu" src="/images/menu-top.svg"/>


</span>


<div className="container">
<h1>{props.text}</h1>
<p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>

<button className="button">Awesome!</button>
</div>
<img className="react" src="/images/react-logo.svg"/>
<img className="react1" src="/images/react-logo.svg"/>
<img className="react2" src="/images/react-logo.svg"/>
</main>
)}

export default Header