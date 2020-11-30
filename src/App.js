import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Mainbody";
import Section from "./components/section/section";
import "./App.css"


function App() {
  return (
    <div className="App">
    <div className="top-section">
     <Navbar />
     <Main />
     </div>
     <Section/>
  </div>
  );
}

export default App;