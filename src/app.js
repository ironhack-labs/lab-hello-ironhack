import React from "react"
import Navbar from "./components/Navbar"
import MainTop from "./components/Main/Main-top-half";
import BottomHalf from "./components/Main/Main-bottom-half";
import Footer from "./components/Footer/Footer";
import "./app.css"

function App() {
  return (
    <div className="App">
        <div className="main">
        <Navbar />
        <MainTop />
        </div>
        <div className="main-bottom">
        <BottomHalf />
        </div>
        <Footer />
    </div>
  );
}

export default App;