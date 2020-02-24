import React, {Component} from "react";
import TopComponent from "./TopComponent.js";
import MainSection from "./MainSection.js";
import BottomIcon from "./BottomIcon.js";


import "./App.css";

const icon1 = "/images/icon1.png"
const icon2 = "/images/icon2.png"
const icon3 = "/images/icon3.png"
const icon4 = "/images/icon4.png"

const ihLogo = "/images/ironhack-logo.svg"
const menuTop = "/images/menu-top.svg"
const reactLogo = "/images/react-logo.svg"


class App extends React.Component {
    render () {
        return (

            <div >

                <main> 
                    <nav>
                        <TopComponent imageUrl={ihLogo} alt="ihLogo" />
                        <TopComponent imageUrl={menuTop} alt="menuTop" />

                    </nav>

                    <section>

                        <MainSection />

                        <div className="react-logo">
                            <img src={reactLogo} alt="" />
                            
                        </div>
                    </section>

                </main>

                <section>

                    <BottomIcon iconUrl={icon1} alt ="icon1" iconTitle="Declarative" />
                    <BottomIcon iconUrl={icon2} alt ="icon2" iconTitle="Components" />
                    <BottomIcon iconUrl={icon3} alt ="icon3" iconTitle="Single Way" />
                    <BottomIcon iconUrl={icon4} alt ="icon4" iconTitle="JSX" />




                </section>
                
                
                
                
                
                
                


            </div>
        )
    }


} 

export default App