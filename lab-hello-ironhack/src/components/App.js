import './App.css';

import Hero from './Hero'
import Content from './Content'

function App() {

  return (
    <main>
      
      <Hero
        
        title="Say Hello to ReactJS"
        text="You will learn how to use the most popular frontend library, and become a super Ninja developer"
        awesome="Awesome!"

      />
 <section className="content">
      <Content
        image="/images/icon1.png"
        title="Declarative"
        text="React makes it painless to create interative UIs."
      />
       <Content
        image="/images/icon2.png"
        title="Components"
        text="Build encapsulated components that manage their state."
      />
      <Content
        image="/images/icon3.png"
        title="Single-way"
        text="A set of immutable values values are passed to the component's."
      />
        <Content
        image="/images/icon4.png"
        title="JSX"
        text="Statically-typed, designed to run on modern browser."
        />
        
        </section>





    </main>
  )




  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
