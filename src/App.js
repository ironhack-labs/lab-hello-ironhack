// 1.- importaciones
import React, { Component } from "react";
import "./App.css"
import Cardlist from "./components/Cardlist"

export default class App extends Component{
    render(){
        const logo = "./images/icon1.png"
        const logo_uno = "./images/icon2.png"
        const logo_dos = "./images/icon3.png"
        const logo_tres = "./images/icon4.png"
        const iron_logo = "./images/ironhack-logo.svg"

        return(
            <div>
            
            <div className="logo">
            <h1> Say hello to ReactJS</h1>
           <img src={iron_logo} width="300" height="300" />
            
            </div>
            <Cardlist
            title= "Declarative"
            descript="Componente de pagina"
            img={logo}
            />
            <Cardlist
            title= "Components"
            descript="Componente de pagina"
            img={logo_uno}
            />
            <Cardlist
            title= "Single - Way"
            descript="Componente de pagina"
            img={logo_dos}
            />
            <Cardlist
            title= "JSX"
            descript="Componente de pagina"
            img={logo_tres}
            />
            </div>
            )
            
            
        
    }
}





// import "./App.css";
// // 2.- funcion o clase
// class App extends Component {
//     render() {

        

        
//       return (
//         <div className="App">
//           <h1> Hello Ironhackers!  </h1>
//           <h5>ESTE ES EL PRIMER EJEMPLO CON REACT WEB :)</h5>
//         </div>
//       );
//     }
//   }

   
//   export default App;
// // 3.- exportaciones
