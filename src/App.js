import React from "react";

// Css style
import "./App.css";

// Components
import Nav from "./NavBar";
import HeroText from "./HeroText";
import ReactLogo from "./ReactLogo";
import Feature from "./Feature";

// Data Base of features
import { featuresData } from "./data";

function App() {
  return (
    // * Creating and styling the "containers" for our Components

    <div className="general-container">
      <Nav />
      <div className="react-logos-container">
        <HeroText />
        {/* Thanks to props from ReactLogo... */}
        <ReactLogo top="10%" right="30%" scale="1.3" />
        <ReactLogo top="45%" right="15%" scale=".8" />
        <ReactLogo top="70%" right="35%" scale=".8" />
        <ReactLogo top="30%" right="-7%" scale=".6" />
        <ReactLogo top="50%" right="-7%" scale=".6" />
        <ReactLogo top="70%" right="-7%" scale=".6" />
      </div>
      <div className="features-container">
        {/* .map to access all items on Data Base array */}
        {featuresData.map((feature) => (
          <Feature
            // Thanks to props from Feature...
            key={feature.id}
            title={feature.title}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
