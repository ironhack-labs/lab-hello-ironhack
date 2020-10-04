import React from "react";
import "./styles/styles.css";

import Header from "./Header";
import HeroText from "./HeroText";
import Feacture from "./Feacture";
import ReactLogo from "./ReactLogo";

function App() {
  return( 
  <div className="background">
      <Header />
      <div className="flex-container">
          <HeroText />
          

      </div>
  </div>
  );
}

export default App;
