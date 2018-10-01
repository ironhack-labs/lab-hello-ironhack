import React from "react";
import {NavBar} from "./navbar.js";
import {Content} from "./content.js";


export const App = () => {
  return (
    <div>
      <NavBar navClass="navClass" logos="logos"/>
      <Content/>
    </div>
  )

}

//<img src="./images/react-logo.svg"/>