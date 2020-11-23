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
        return(
            <div>
            <h1> Say hello to ReactJS</h1>

            
            
            <Cardlist
            title= "IMAGEN_1"
            descript="Componente de pagina"
            img={logo}
            />
            <Cardlist
            title= "IMAGEN_2"
            descript="Componente de pagina"
            img={logo}
            />
            <Cardlist
            title= "IMAGEN_3"
            descript="Componente de pagina"
            img={logo}
            />
            <Cardlist
            title= "IMAGE_4"
            descript="Componente de pagina"
            img={logo}
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
