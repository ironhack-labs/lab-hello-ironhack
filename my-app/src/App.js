import "./App.css";
import Icon1 from "./components/Icon1.js"; // <== We import a component like this
import Icon2 from "./components/Icon2.js";
import Navbar from "./components/Navbar.js";
import Menu from "./components/Menu.js";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        {<Navbar />} {<Menu />}
      </div>

      <div className="bottomIcons">
        {<Icon1 />} {<Icon2 />}{" "}
      </div>

      {/* < /> */}

      {/* <ButtonYellow /> */}

      {/* <Gallery /> */}
    </div>
  );
}

export default App;
