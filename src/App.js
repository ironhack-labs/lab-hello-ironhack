import React from 'react';
import logo1 from './public/images/icon1.png';
import logo2 from './public/images/icon2.png';
import logo3 from './public/images/icon3.png';
import logo4 from './public/images/icon4.png';

import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Logos from './components/Logos/Logos'



import './App.css';

function App() {
  return (

    <div className="App">
      <Navbar />
      <header className="App-header">
        <Cover />

      </header>
      <div className="Logos">
        <Logos img={logo1} title="Declarative" subtitle="React makes it painless to create interactive UIs" />
        <Logos img={logo2} title="Declarative" subtitle="React makes it painless to create interactive UIs" />
        <Logos img={logo3} title="Declarative" subtitle="React makes it painless to create interactive UIs" />
        <Logos img={logo4} title="Declarative" subtitle="React makes it painless to create interactive UIs" />
      </div>
    </div>

  );
}

export default App;
