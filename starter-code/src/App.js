import React from "react";
import {Cabecera} from "./cabecera";
import {Section} from "./section";

export const App = () => {
    return  (
        <div style={{margin:"0 auto", width:"80%"}}>

            <Cabecera 
            image="./images/ironhack-logo.svg" 
            image2="./images/menu-top.svg" 
            title="Say hello to ReactJS" 
            subtitle="You will learn a Frontend framework from scratch, to become an Ninja Developer." 
            button="Awesone!"/>

            <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                <Section 
                image="./images/icon1.png"
                title="Declarative" 
                subtitle="React makes it plainless to create interactive UIs."/>
                <Section 
                image="./images/icon2.png"
                title="Components" 
                subtitle="Build encapsulated components that manage their state."/> 
                <Section 
                image="./images/icon3.png"
                title="Single-Way" 
                subtitle="A set of inmutable values are passed to their components."/> 
                <Section 
                image="./images/icon4.png"
                title="JSX" 
                subtitle="Statically-typed, designed to run on modern browsers."/>  
            </div>
        </div>
        
    ) 
}