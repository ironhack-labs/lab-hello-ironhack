import React from "react";
import "./styles.css"; // Ver por qué se importa de esta manera

import Feature from "./Feature";
import AppWhite from "./AppWhite";
import AppBlack from "./AppBlack";

export default function App() {
  return (
    <div className="App">
      <AppBlack />
      <AppWhite />
    </div>
  );
}
