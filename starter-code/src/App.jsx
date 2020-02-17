import "./styles/App.css";
import React from "react";
import Button from "./components/Button";
import ColumnItem from "./components/ColumnItem";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import MainContent from "./components/MainContent";
import Wrap from "./components/Wrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <MainContent bg="#1F2535 url(/images/react-logo.svg) no-repeat center center">
        <Wrap>
          <Navbar>
            <Logo img="/images/ironhack-logo.svg" alt="Ironhack" />
            <Menu img="/images/menu-top.svg" />
          </Navbar>
          <Tagline
            title="Say hello to ReactJS"
            baseline="You will learn Frontend framework from scratch, to become a Ninja Developer"
          />
          <Button bgcolor="#FFF" color="#2D3342">
            Awesome!
          </Button>
        </Wrap>
      </MainContent>
      <Footer>
        <Wrap>
          <ColumnItem img="/images/icon1.png">
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </ColumnItem>
          <ColumnItem img="/images/icon2.png">
            <h2>Components</h2>
            <p>Built encapsulated components that manage their state.</p>
          </ColumnItem>
          <ColumnItem img="/images/icon3.png">
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </ColumnItem>
          <ColumnItem img="/images/icon4.png">
            <h2>JSX</h2>
            <p>Statistically-typed designed to run on modern browsers.</p>
          </ColumnItem>
        </Wrap>
      </Footer>
    </div>
  );
};

export default App;
