import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
