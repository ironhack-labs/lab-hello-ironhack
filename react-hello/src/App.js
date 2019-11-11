import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome'

// class App extends React.Component {

//   testing = {first: "Juan", last: "G"}

//   render () {

//     return ( 
//       <div>
        
//         <Welcome theTest = {this.testing}/>
  
//       </div>
//     );
//   }
  
// }

function App() {

  let testing = {first: "Juan", last: "G"}

  return ( 
    <div>
      
      <Welcome theTest = {testing}/>

    </div>
  );

}

export default App;