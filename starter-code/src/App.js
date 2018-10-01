import React from "react";


const Nav = () =>  {
    return (
        <nav style={{marginLeft:"50px"}}>
            <img style={{marginTop:"50px"}} src="../images/ironhack-logo.svg" />
            <img style={{float:"right",marginRight:"50px",marginTop:"50px"}} src="../images/menu-top.svg" />
        </nav>
    )
}

const Title = () => {
    return (
        <div style={{color:"white", width:"45%",marginLeft:"50px",paddingBottom:"50px"}}>
            <h1 style={{fontSize:"80px"}}>Say hello to ReactJS</h1>
            <p style={{fontSize:"30px", marginTop:"-50px"}}>You will learn a Frontend framework from scratch, to became a Ninka Developer</p>
            <button style={{padding:"20px",fontSize:"20px"}}>Awesome!</button>
        </div>
    )
}



const Items = ({ image, title, text }) => {
    return (
        <div style={{width:"20%",float:"left",marginLeft:"50px",marginTop:"50px"}}>
            <img src={image} />
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

const Section = () => {
    return (
        <div>
            <Items image="../images/icon1.png" title="Declarative" text="React makes it painlesss to create interactive UIs" />
            <Items image="../images/icon2.png" title="Components" text="Build encapsulated components that manage their state." />
            <Items image="../images/icon3.png" title="Single-Wau" text="A set of immutable values are passed to the component's" />
            <Items image="../images/icon4.png" title="JSX" text="Statically-typed, designed to run on modern browsers" />
        </div>
    )
}



export const App = () => {
    return (
        <div>
            <div style={{ backgroundColor: "#1F2535",backgroundImage:"url('../images/react-logo.svg')"}}>
                <Nav />
                <Title />
            </div>
            <Section />
        </div>
    )
}