import React from "react";
import { Nav } from "./nav";
import { Intro } from "./intro";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <Nav />
      <Intro />
    </header>
  );
};
