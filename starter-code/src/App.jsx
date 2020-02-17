import React from "react"
import Yay from "./yay";
import "./Style.css"
import Wallouh from "./wallouh";
import Lolilol from "./lolilol";

// import Greetings from "./Greetings"

export default function App() {
    return (
        <div className="mainBox">
        <Lolilol />
        <div>
        <Yay />
        </div>
        <div className="imageBox">
        <Wallouh image="../images/icon1.png" text="HELLO"/>
        <Wallouh image="../images/icon2.png" text="LE MONDE"/>
        <Wallouh image="../images/icon3.png" text="EST-CE QUE"/>
        <Wallouh image="../images/icon4.png" text="TU M'ENTENDS ?????"/>
        </div>
        </div>
    )
}