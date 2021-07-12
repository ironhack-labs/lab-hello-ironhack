
import './App.css';
import Header from './Header';
import Main from './Main';
import Section from './Section'

import sectionImage from './icon1.png'
import sectionImage2 from './icon2.png'
import sectionImage3 from './icon3.png'
import sectionImage4 from './icon4.png'

function App() {
  return (
    <>

      <Header />
      <Main />
      <div className="sect">
        <Section
          link={sectionImage}
          title="declarative"
          paragrahp="React makes it painless tocreate interactive UIs"
        />

        <Section
          link={sectionImage2}
          title="Components"
          paragrahp="Build encapsulated components that manages their state"
        />

        <Section
          link={sectionImage3}
          title="Single-Way"
          paragrahp="A set of immutable values are passed to the components"
        />

        <Section
          link={sectionImage4}
          title="JSX"
          paragrahp="Statically-typed, design to run on modern browsers"
        />

      </div>

    </>
  );
}

export default App;
