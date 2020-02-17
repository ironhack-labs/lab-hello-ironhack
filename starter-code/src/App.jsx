//rafce/raf/rafc

import React from 'react'

import NavBar from "./components/navBar";
import MainPart from "./components/mainPart";
import Footer from "./components/footer";

import "./styles/App.css";


const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <MainPart/>
            <Footer/>
        </div>
    )
}

export default App
