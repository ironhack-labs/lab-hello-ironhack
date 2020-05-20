import React, { Component } from "react";

// example for importing components fro reactstrap
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
    render () {
        //const [collapsed, setCollapsed] = useState(true);

        //const toggleNavbar = () => setCollapsed(!collapsed);
        // content goes here
        //const ... = ...

        return (
      <div className="container"> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#"><img src="/images/ironhack-logo.svg" alt="" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<section id="welcome-screen" className="container row d-flex flex-nowrap">
<div className="align-self-end">
            <h1 className="mt-5">Say hello to ReactJS!</h1>
            <p className="col-6 mt-5">You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
            <button className="btn-light mt-3 mb-3">Awesome!</button>
            </div>
            </section>
            <section id="what-it-does" className="container">
            <div className="row">
                <div className="col-3"><img src="/images/icon1.png" alt="" /> </div>
                <div className="col-3"><img src="/images/icon2.png" alt="" /> </div>
                <div className="col-3"><img src="/images/icon3.png" alt="" /> </div>
                <div className="col-3"><img src="/images/icon4.png" alt="" /> </div>
            </div>
            </section>
            </div>

// TODO: learn how to implement reactstrap
/*            <Header>
            <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto"><img src="/images/ironhack-logo.svg" alt="" /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Header> */

        );
    }

}

export default App;