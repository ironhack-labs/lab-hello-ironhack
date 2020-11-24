import React, { Component } from "react";
import "../App.css"
export default class Cardlist extends Component{

    render({img,title,descrip}= this.props){
        return(
            <div className ="cardStyles">
            <img src={img}/>
            <h3> {title}</h3>
            <h5> {descrip} </h5>
            </div>
            
            )
        
    }
}