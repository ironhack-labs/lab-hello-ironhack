import React, { Component } from "react";

//import User from "../components/User"

import "./App.css";

class App extends Component {
  render(){
    return (
    <div className="container-all">
        <div className="navigation" >

            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>

        </div>

        <div className="hero">

              <h1>Say hello to ReactJS!!</h1>
              <p>You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
              <button>Awesome!</button>

        </div>

        <div className="cards">
          <ul>
            <li> 
              <img src="/images/icon1.png"></img> 
              <h2>Declarative</h2>
              <p>For now, don't worry about creating more than one component, we will cover that in the following lessons!</p>
            </li>
            <li> 
              <img src="/images/icon2.png"></img> 
              <h2>Components</h2>
              <p>For now, don't worry about creating more than one component, we will cover that in the following lessons!</p>
            </li>
            <li> 
              <img src="/images/icon3.png"></img> 
              <h2>Single-Way</h2>
              <p>For now, don't worry about creating more than one component, we will cover that in the following lessons!</p>
            </li>
            <li> 
              <img src="/images/icon4.png"></img> 
              <h2>JSX</h2>
              <p>For now, don't worry about creating more than one component, we will cover that in the following lessons!</p>
            </li>
          </ul>
        </div>

    

    </div>
    )
   
  }
  

}




















// class App extends Component {

//     // Los componentes de clase tienen método return() que retorna JSX y podrían tener state
//     render() {

//         const formatName = user => `${user.firstName} ${user.lastName}`

//         const user = {
//             firstName: 'Lucía',
//             lastName: 'Astray',
//             avatarUrl: 'https://www.healthytexaswomen.org/sites/healthytexaswomen.org/files/healthy-texas-woman_0.jpg',
//             bootcamp: 'Web Development'
//         }

//         // Elemento de JSX
//         const details = <h2>¡Hey, {formatName(user)}! Bienvenid@ al Bootcamp de {user.bootcamp}</h2>

//         // Función que retorna JSX
//         const showAvatar = user => {
//             if (user.avatarUrl) {
//                 return <img src={user.avatarUrl} />
//             } else {
//                 return <img src="https://nourhealth.sg/wp-content/uploads/2017/04/confused-lady.png" />
//             }
//         }

//         // Retorno de JSX
//         return (
//             <header className="App">
//                 <h1> Hello Ironhacker! </h1>
//                 {details}
//                 {showAvatar(user)}

//                 <hr></hr>

//                 <h2>...y ahora nuestros componentes usuarios:</h2>
//                 <User firstName="Germán" lastName="Álvarez" />
//                 <User firstName="Alessio" lastName="Marinoni" />

//                 <hr></hr>
//                 <h2>...y ahora un componente pre-fabricado de NPM:</h2>
                
//             </header>

//         )
//     }
// }

export default App