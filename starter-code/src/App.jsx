import React from 'react';
import "../public/styles/App.css";
import NavBar from "../components/NavBar";
import Titles from "../components/Titles";
import Awesome from "../components/Awesome";
import LowDiv from "../components/LowDiv"

const App = () => {
    return (
        <div>
            <div className="main-div">
                <NavBar></NavBar>
                <Titles></Titles>
                <Awesome></Awesome>
            </div>
            <LowDiv></LowDiv>
        </div>
    )
}

export default App
