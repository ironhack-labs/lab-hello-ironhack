import './App.css';
import Landing from './Landing.js';
import Navbar from './Navbar.js';
import Button from './Button.js';
import Card from './Card.js';
import Declarative from './icon1.png'
import Components from './icon2.png'
import SigleWay from './icon3.png'
import JSX from './icon4.png'


function App() {
  return (
    <> 
    <section className='landing-section'> <Navbar />  <Landing /> <Button /> </section> 
      <section className='cards-section'> 
        <Card image= {Declarative} title ='declarative' description = 'React makes it painless to create interactive UIS.'/> 
        <Card image={Components} title='components' description='Build encapsulated components that manage their state.' /> 
        <Card image={SigleWay} title='single-way' description='A set of immutable values are passed to the component`s.' /> 
        <Card image={JSX} title='jsx' description='Statically-typed, designed to run on modern browsers.' /> 
      </section>
    </>
  );
}

export default App;
