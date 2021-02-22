import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Card from './Card'

import DeclarativeImg from "./icon1.png";
import ComponentsImg from "./icon2.png";
import SingleWayImg from "./icon3.png";
import JSXImg from "./icon4.png";


function App() {
  return (
    <>
      <section>
      <Navbar></Navbar>
      <Header></Header>        
      </section>
      
      <div className='container' >
        
      <Card
          image={DeclarativeImg}
          imageName='icon'
          title='Declarative'
          text='React makes it painless to create interative ULS'
        />
      <Card
          image={ComponentsImg}
          imageName='icon2'
          title='Components'
          text='Build encapsulate components that manage their state'
        />
      <Card
          image={SingleWayImg}
          imageName='icon3'
          title='Single-Way'
          text='A set of immutable values are passed to the components'
        />
      <Card
          image={JSXImg}
          imageName='icon4'
          title='JSX'
          text='Statically-typed, designed to run a modern browser'
        />
      </div>
      
    </>
  );
}

export default App;
