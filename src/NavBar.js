import React from "react";

// TODO Navbar images
// 2 images (logo and hamburguer menu)

function Nav() {
  return (
    // Creating and styling each component by separated

    <nav className="nav-bar">
      <img src="./images/ironhack-logo.svg" alt="Ironhack Logo" />
      <img src="./images/menu-top.svg" alt="Hamburger logo" />
    </nav>
  );
}

export default Nav;
