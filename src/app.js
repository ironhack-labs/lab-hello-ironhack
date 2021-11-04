import React from "react"; // <== import React

const App = () => {
  return (
    <div>
      <section className="header">
        <div className="nav">
          <image src="../public/images/ironhack-logo.svg" alt="logo" />
          <image src="../public/images/menu-top.svg" alt="menu" />
        </div>
        <div className="title">
          <h1>
            Say Hello to <br />
            ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular frontend library,{" "}
            <br /> and become a super ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </section>
      <section className="main">
        <div>
          <article>
            <image src="../public/images/icon1.png" alt="icon" />
            <h2>Declarative</h2>
            <p>React makes it painless to create uis.</p>
          </article>
          <article>
            <image src="../public/images/icon2.png" alt="icon" />
            <h2>Components</h2>
            <p>React makes it painless to create uis.</p>
          </article>
          <article>
            <image src="../public/images/icon3.png" alt="icon" />
            <h2>Single-Way</h2>
            <p>React makes it painless to create uis.</p>
          </article>
          <article>
            <image src="../public/images/icon4.png" alt="icon" />
            <h2>Jsx</h2>
            <p>React makes it painless to create uis.</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default App;
