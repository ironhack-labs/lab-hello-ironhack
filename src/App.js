import './App.css';
import Title from "./Title"
import Article from "./Article"
import Navbar from "./navbar/Navbar"
import Thumbnails from "./thumbnails/Thumbnails"

function App() {
  return (


    <>
      <Navbar/>  
    <Title text="Say hello to ReactJS" />

      <Article text="You will learn how to use the most popular frontend library, and become a super Ninja developer" />
      <Thumbnails
        infoTitle="Declarative"
        info="React makes it painless to create interactive UIs"
      />
      <Thumbnails
        infoTitle="Components"
        info="React makes it painless to create interactive UIs"
      />
      <Thumbnails
        infoTitle="Single-Way"
        info="React makes it painless to create interactive UIs"
      />
      <Thumbnails
        infoTitle="JSX"
        info="React makes it painless to create interactive UIs"
      />
    </>


    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Hola que tal
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
