import "./App.css";

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';
const ihLogo = '/images/ironhack-logo.svg';
const reactLogo = '/images/react-logo.svg';
const menuBarImage = '/images/menu-top.svg';

import Card from './Card.js'



import React ,{Component} from "react";



class App extends Component {
    render() {
  
      return (
         <div>
           <header>
             <nav>
               <ul> 
               <img src={reactLogo}></img>
               <img src={ihLogo}></img>
               <img src={menuBarImage}></img>
               </ul>
             </nav>
             <h1> Say hello to react JS</h1>
             <h2> You will learn how to use the most popular frontend library. and become a ninja</h2>
             <button > Awesome!</button>
             <div class="logos">
             <Card className ="caja"
             
               imgsrc ={icon1}
               h1 = "Declarative"
               p= "React makes it painless to create interactive UIs"
                 
             />
             <Card  
             imgsrc ={icon2}
             h1 = "Components"
             p= "Build encapsulted components that manage their state."
             />
             <Card 
             imgsrc={icon3}
             h1 ="Single-Way"
             p= " A set of immutable values are passed to the component's"
            />
            <Card 
            imgsrc = {icon4}
            h1="JSX"
            p="Statically-typed, designed to run on modern browsers. "
            />
              </div>
           </header>
        
        </div>
      );
    }
  }
  
  export default App;