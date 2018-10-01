import React from "react";

const Header = () => {
    return (
        <div style={{backgroundColor:'blue', height:'500px'}}>
            <img src="/images/ironhack-logo.svg"/>     
            <h1>Say hello to ReactJS</h1> 
            <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
            <button>Awsome!</button>
            
        </div>
    )
}

const Item = (props) => {
    return(
    <div> 
        <img src={props.url}/>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
    </div>)
}

export const App = () => (
        <div>
            <Header/>
            <div style={{display:"flex"}}>            
            <Item url="/images/icon1.png" title="Declarative" subtitle="React makes it painless to create interactive UIs"/>
            <Item url="/images/icon2.png" title="Components" subtitle="Build encapsulated components that managed their state"/>
            <Item url="/images/icon3.png" title="Single-Way" subtitle="A set of immutable values are passed to the components"/>
            <Item url="/images/icon4.png" title="JSX" subtitle="Statically typed, designed to run on modern browsers"/>
            </div>
           
        </div>
    )
