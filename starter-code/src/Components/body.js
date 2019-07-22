import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Body extends Component {
  
  
  thingIveLearned = () =>{
    let arr = ['Express','Node',"MongoDB","HTML","CSS","JQuery"]
    return(
    arr.map((e)=>{
      return(
        <li class="learned">{e}</li>
      )
    })
    )
  }
  thingsIHaventLearned = ()=>{
    let arr = ["React"]
    return(
      arr.map((e)=>{
        return(
          <li class="learned">{e}</li>
        )
      })
      )
  }
  
  render(){
    return(
      <div class="body-page">
      <div class="what-i-learned">
        <h3>Things I have learned</h3>
        <ol>
        {this.thingIveLearned()}
        </ol>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <div class="what-i-learned">
        <h3>Things I haven't learned yet</h3>
        <ol>
        {this.thingsIHaventLearned()}
        </ol>
      </div>
      </div>
    )
  }
}
export default Body;