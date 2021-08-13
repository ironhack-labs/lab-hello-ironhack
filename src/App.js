import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Item from './components/Item';

// Image Import
import ImgDeclare from './images/icon1.png';
import ImgComponents from './images/icon2.png';
import ImgSingle from './images/icon3.png';
import ImgJSX from './images/icon4.png';

function App() {
  const title = 'Say hello to ReactJS';
  const content =
    'You will learn how to use the most popular frontend library and become a super Ninja Developer';

  return (
    <div>
      <div className="upperNavbar">
        <Navbar />
      </div>
      <Landing title={title} text={content} />
      <div className="container">
        <Item
          img={ImgDeclare}
          title="Declarative"
          content="React makes it painless to create interactive UIs"
        />

        <Item
          img={ImgComponents}
          title="Components"
          content=" Build encapsuled components that manage their state"
        />
        <Item
          img={ImgSingle}
          title="Single-Way"
          content="A set of immutable values are passed to the components"
        />
        <Item
          img={ImgJSX}
          title="JSX"
          content="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
