import React from "react";
// import "./App.css";
import { NavBar } from "./src/navbar.js"
import { Header } from "./src/header.js"
import { Main } from "./src/main.js"

const estilo = {
    backgroundColor: "blue"
}

const App = () => {
    return (
        <div style={estilo}>
            <NavBar />
            <Header />
            <Main />
        </div>
    )};

    export default App;