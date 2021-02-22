import './App.css';
import Navbar from './Navbar.js'
import Header from './Header.js'
import Button from './Button.js'
import IconCard from './IconCard.js'
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import icon4 from "./icon4.png"


function App() {
  return (
    <>
    <Navbar />
      <div className="fullHeader">
      <div>
      <Header />
      <Button />
      </div>
      <div className="reactLogo">
      </div>
      </div>
      <div className="iconCard">
        <IconCard img={icon1} title="Declarative" text="ñopeghbqadosb piudfgbsañ pfgbuasdbfgasdfb ugf" />
        <IconCard img={icon2} title="Declarative" text="ñopeghbqadosb piudfgbsañ pfgbuasdbfgasdfb ugf" />
        <IconCard img={icon3} title="Declarative" text="ñopeghbqadosb piudfgbsañ pfgbuasdbfgasdfb ugf" />
        <IconCard img={icon4} title="Declarative" text="ñopeghbqadosb piudfgbsañ pfgbuasdbfgasdfb ugf" />
      </div>

    </>
  );
}

export default App;