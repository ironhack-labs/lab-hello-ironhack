import logo from '../logo.svg';
import './App.css';
import NavBar from './nav-bar.js';
import Section1 from './section1.js';
import Section2 from './section2.js';

function App() {
  return (
    <main className="App">
    <section>
        <NavBar   logo='../../ironhack-icon.png'  burger='../../burger.png' />
</section>
   <Section1 logo1='../../logo192.png' logo2='../../logo512.png' />
   <div>
   <Section2 logo='../../icon1.png' title='Declarative' text='React makes it painless to create interactive UIs '/>
   <Section2 logo='../../icon2.png' title='Components' text='Build encapsulated components that manage their state. '/>
   <Section2 logo='../../icon3.png' title='Single-Way' text="A set of immutable values are passed to the component\'s. "/>
   <Section2 logo='../../icon4.png' title='JSX' text='Statically-typed, designed to run on modern browsers.'/>
   </div>
    </main>
  );
}

export default App;
