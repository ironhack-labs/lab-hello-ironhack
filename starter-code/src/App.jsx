// rafce / raf / / rafc / rfc

// import React from 'react'

// export default function App() {
//     return (
//         <div>

//         </div>
//     )
// }

import React from 'react';
import Card from "./Card"
import "../public/app.css";
import Menu from "./Menu"

const App = () => {
    return (
        <div classNameName="App">

            <div className="main-1">
                <nav>
                    <img src="../images/ironhack-logo.svg" className="logo-ironhack" />
                    <img src="../images/menu-top.svg" className="logo-menu" />
                </nav>
                <Card title="Say hello to ReactJS" subTitle="You will learn a Frontend framework from scratch, to became a Ninka Developer." btnText="Awesome !" />

            </div>

            <div className="main-2">

                <div className="cat-container">
                    <Menu imgUrl="/images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs." />
                </div>

                <div className="cat-container">
                    <Menu imgUrl="/images/icon2.png" title="Components" description="Build encapsulated components that manages their state." />
                </div>

                <div className="cat-container">
                <Menu imgUrl="/images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the components." />
                </div>

                <div className="cat-container">
                <Menu imgUrl="/images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browsers." />
                </div>

            </div>
        </div>
    )
}

export default App

