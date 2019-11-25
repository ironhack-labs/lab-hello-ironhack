import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css"

const logo = "/images/ironhack-logo.svg"
const menu = '/images/menu-top.svg'
const reactLogo = "/images/react-logo.svg"
const dec = "../images/icon1.png"
const comp = "../images/icon2.png"
const single = "../images/icon3.png"
const jsx = "../images/icon4.png"


const title = 
<div>
<div className="top">
    <div className="top-logos">
    <img className="logo" src={logo}></img> 
    <img className='menu' src={menu} height="15px"></img> 
    </div>
    <div className='main'>
<div className="landing">
    <h1>Say hello to ReactJS</h1>
    <h2 className="learn">You will learn a Frontend framework from scratch, to become a Ninja Developer</h2>
    <a href="">Awesome!</a>
</div> 
<img className="react" src={reactLogo}></img> 
</div>
</div>
<div className="bottom">
    <div className="symbols">
    <img src={dec} height="150px" width='150px'></img>  
    <h2 className="h2-low">Declarative</h2>
    <p>React makes it painless to create interactive UIs</p>
    </div>
    <div className="symbols">
    <img src={comp} height="150px" width='150px'></img> 
    <h2 className="h2-low">Components</h2>
    <p>Build encapsulated components that manage their state.</p>
    </div>
    <div className="symbols">
    <img src={single} height="150px" width='150px'></img> 
    <h2 className="h2-low">Single-Way</h2>
    <p>A set of immutable values is passed to the components.</p>
    </div>
    <div className="symbols" >
    <img src={jsx} height="150px" width='150px'></img> 
    <h2 className="h2-low">JSX</h2>
    <p>A set of immutable values is passed to the components.</p>
    </div>
</div>
</div>

ReactDOM.render(title, document.getElementById('root'))
