import React from "react";
import "./styles.css";

function NavLogo({ logo }) {
  return <img src={logo} alt="ironhack-logo" />;
}
function NavMenu({ prop }) {
  return <img src={prop} alt="menu-top" />;
}
function CatchPrase({ title, subtitle }) {
  return (
    <React.Fragment>
      <h1 className="title">{title}</h1>
      <p className="sub-par">
        You will learn a Frontend framework from scratch, to become a ninja
        Developer
      </p>
    </React.Fragment>
  );
}

function ReactLogos({ logo }) {
  return <img src={logo} alt="react-logo" />;
}

function Article({ icon, iconTitle, description }) {
  return (
    <div className="article-wrapper">
      <img class="icon" src={icon} alt="icon" />
      <h2 className="article-title">{iconTitle}</h2>
      <p className="article-description">{description}</p>
    </div>
  );
}

const App = () => {
  const mainTitle = "Say hello to ReactJs !";
  const subTitle =
    "You will learn a Frontend framework from scratch, to become a ninja Developer";
  return (
    <React.Fragment>
      <section className="wrapper-top">
        <div className="left-content">
          <div className="row1">
            <NavLogo logo="/images/ironhack-logo.svg" />
          </div>
          <div className="row2">
            <CatchPrase title={mainTitle} subtitle={subTitle} />
          </div>
          <div className="row3">
            <button className="btn">Awesome!</button>
          </div>
        </div>
        <div className="right-content">
          <div className="col1">
            <div className="big-react-logos">
              <ReactLogos logo="/images/react-logo.svg" />
              <ReactLogos logo="/images/react-logo.svg" />
              <ReactLogos logo="/images/react-logo.svg" />
            </div>
          </div>
          <div className="col2">
            <div className="right-row1">
              <NavMenu prop="/images/menu-top.svg" />
            </div>
            <div className="right-row2">
              <ReactLogos logo="/images/react-logo.svg" />
              <ReactLogos logo="/images/react-logo.svg" />
              <ReactLogos logo="/images/react-logo.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <Article
          icon="/images/icon1.png"
          iconTitle="Declarative"
          description="React maskes it painless to create interatives UIs."
        />
        <Article
          icon="/images/icon2.png"
          iconTitle="Components"
          description="Build encapsulated components that manage their state."
        />
        <Article
          icon="/images/icon3.png"
          iconTitle="Single-Way"
          description="A set of immutable values are passed to the component's."
        />
        <Article
          icon="/images/icon4.png"
          iconTitle="JSX"
          description="Statically-typed, designedto run on modern browsers."
        />
      </section>
    </React.Fragment>
  );
};

export default App;
