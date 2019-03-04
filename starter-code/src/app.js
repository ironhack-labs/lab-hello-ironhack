import React,{ Component } from "react";
import "./app.css";

class App extends Component {
  render(){

    

      const picture1 =  (
        <div className="picture1">
            <img src="../images/icon1.png"></img>  
            <h1>Declearive</h1>
            <p>React make it painlessto craet interacetive UIs.</p>   
        </div>
      );

      const picture2 = (
          <div className="picture2">
          <img src="../images/icon2.png"></img>
          <h1>Componnate</h1>
          <p>Build enscapesulate components that manage their state.</p>   
         </div>
      );
     
      const picture3 = (
        <div className="picture2">
       <img src="../images/icon3.png"></img>
        <h1>Single-Way</h1>
        <p>A set of immutable value are pass tothe components.</p>   
       </div>
    );
   
        const picture4 = (
          <div className="picture4">
          <img src="../images/icon4.png"></img>
           <h1>JSX</h1>
              <p>stictically- typr deside to run on modern brouwser.</p>   
             </div> 
        );
     






    

      const button = (
        <button>Awesome!</button>
      );

      const nav = (
        <nav>
          <div className="logo">
          <img src="../images/ironhack-logo.svg"></img>
          </div>
         <div className="menu">
           <img src="../images/menu-top.svg"></img>
           </div>
        </nav>
      );

      
    return (
   
      <div className ="word">
      
      <div className="main">
      
      {nav}
      <h1>Say hello to ReactJS</h1>
      <p>you will learn front Freamework from scratch, to become a geed developer.</p>
      {button}
      </div>

  
    <div className="picture">

    <div className = "eachPice">
    {picture1}
    </div>
    <div className = "eachPice">
    {picture2}
    </div>
    <div className = "eachPice">
    {picture3}
    </div>
    <div className = "eachPice">
    {picture4}
    </div>

    </div>
     




   
      </div>
    );
  }
}



export default App;