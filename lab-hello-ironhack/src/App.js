import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src="/images/ironhack-logo.svg" alt=""/>
        <img src="/images/menu-top.svg" alt=""/>
      </div>

      <div className="section-one">
        <h1>Say Hello to ReactJS</h1>
        <p>You willlearn how to use the most popular frontend library, and become a super Ninja developer</p>
        <br/>
        <br/>
        <button>Awesome</button>
      </div>

       <div className='section-two'>
          <div className='card-container'>
            <img src='/images/icon1.png' alt=""/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className='card-container'>
            <img src='/images/icon2.png' alt=""/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className='card-container'>
            <img src='/images/icon3.png' alt=""/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className='card-container'>
            <img src='/images/icon4.png' alt=""/>
            <h3>JSX</h3>
            <p>Statucakky typed designed to run on modern browsers.</p>
          </div>


       </div>


      

    </div>
  )
}

export default App;
