
import React from 'react';
import "./styles/App.css";
import Logo from "./components/Logo";
import MainTitle from './components/MainTitle';
import Paragraph from './components/Paragraph';
import MenuTop from './components/MenuTop';
import Button from './components/Button';
import SmallItems from './components/SmallItems';

// import icon from "../public/images/icon1.png";


export const App = () => {
    return (
        <div className="big-container">
            <div className="background">
                <nav className="navbar">
                <Logo image= "../images/ironhack-logo.svg" />
                <MenuTop icon= "../images/menu-top.svg" />
                </nav>
                <MainTitle title="Say hello to ReactJS" />
                <Paragraph paragraph="You will learn a Frontend framework from scratch to become a Ninja Developer" />
                <Button btn="Awesome!" />
            </div>
            <div className="itemsList">
                <SmallItems smallimage="../images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs." />
                <SmallItems smallimage="../images/icon2.png" title="Components" description="Build encapsulated components that manage their state." />
                <SmallItems smallimage="../images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the component's." />
                <SmallItems smallimage="../images/icon4.png" title="JSX" description="Statically-typed designed to run on modern browsers" />
            </div>
        </div>
    )
}

export default App;

// import React from 'react'

// export default function App() {
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

