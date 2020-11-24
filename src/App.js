import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import USP from './components/USP.js'

function App() {
  const imgs = [
    './images/icon1.png',
    './images/icon2.png',
    './images/icon3.png',
    './images/icon4.png',
  ]
  const titles = ['Declarative', 'Components', 'Single-Way', 'JSX']
  const descriptions = [
      'React makes it painless to create interactive UIs.',
      'Build encapsulated components that manage their state.',
      'A set of immutable values are passed to the components',
      'Statically-type, designed to run on modern browsers'
  ]

  const style= {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '50px'
  }
  return (
    <div className="App">
      <Header/>
      <div style={style}> 
        <USP img={imgs[0]} title={titles[0]} description={descriptions[0]}/>
        <USP img={imgs[1]} title={titles[1]} description={descriptions[1]}/>
        <USP img={imgs[2]} title={titles[2]} description={descriptions[2]}/>
        <USP img={imgs[3]} title={titles[3]} description={descriptions[3]}/>
      </div>
    </div>
  );
}

export default App;
