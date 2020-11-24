//1. Importaciones
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js"; //Compila y surte a index.js


//2. Funciones o clases
ReactDOM.render(
    <App />, //Referencia a linea 4 import App
    document.getElementById("root") //Renderizar 
  ); 

//3. Exportaciones (para conectar entre archivos)