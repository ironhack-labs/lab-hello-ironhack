import React from "react";
import Nav from "./Nav";
import Component from "./Components";
import "./App.css";

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Nav src1="/images/ironhack-logo.svg" src2="/images/menu-top.svg"/>
                <Component />
            </div>
        );
    }
}
