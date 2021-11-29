import Nav from "./Nav";
import Section from "./Section";
import Card from "./Cards";
import logo from "./logo.svg";
import img1 from "./icon1.png";
import img2 from "./icon2.png";
import img3 from "./icon3.png";
import img4 from "./icon4.png";
import "./App.css";
import menu_logo from "./menu-top.svg";

function App() {
  return (
    <div className="App">
      <header className="body">
        <Nav src={menu_logo} />
        <Section
          title="Say hello to React JS"
          paragraph="You will learn how to use the most popular frontend library, and become a super ninja developer."
          button_title="Awesome!"
        />
      </header>
      <footer className="footer">
        <Card
          src={img1}
          subtitle="Declarative"
          paragraph="React make it painless to create interactive UIs"
        />
        <Card
          src={img2}
          subtitle="Components"
          paragraph="Build encapsulated components that manage their state"
        />
        <Card
          src={img3}
          subtitle="Single-Way"
          paragraph="A set of inmutable values are passed to the component's"
        />
        <Card
          src={img4}
          subtitle="JSX"
          paragraph="Statically-typed, designed to run on modern browsers."
        />
      </footer>
    </div>
  );
}

export default App;
