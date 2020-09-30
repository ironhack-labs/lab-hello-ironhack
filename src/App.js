
import React from "react";
import NavBar from "./NavBar";
import Section1 from "./Section1";
import Section2 from "./Section2";




const App = () => {


    return (
        <div className="all-body">
            <section className="nav-hero">
                <NavBar></NavBar>
                <Section1></Section1>
            </section>
            <Section2></Section2>
        </div>)
}

export default App;



