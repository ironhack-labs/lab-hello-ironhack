

//First create Header.js Compnente
//import HEADER compnente inside the App.js 
// einfach in die stelle rein schreiben wo es hin soll 

//compnents can be function or classes 

// Hier wird alles zusammenfassend displayed
function App() {
  return (
    // div is eine compnente ele müssen alle in eie fiv 
    <div className="container">
     <h1>Hello</h1>
    </div>

  );
}



// How to handle Props 
//When we take the title away the default value will display
/*
function App() {
  return (
    // div is eine compnente ele müssen alle in eie fiv 
    <div className="container">
     <Header title = 'Hello' />
   
    </div>

  );
}
*/





/* Für Classen  

import React from 'react'

class App extends React.Component { 
  render() {
    return <h1>Hello from a class</h1>
  }
}

*/
export default App;

