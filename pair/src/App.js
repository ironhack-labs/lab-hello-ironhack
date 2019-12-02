import React from 'react';
import Navbar from './components/Navbar'
import Text from './components/Text'
import Button from './components/Button'
import Footer from './components/Footer'
import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'
import Icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (

    <>
      <Navbar />

      <Text />

      <Button />
      <div class="footer">
        <Footer
          image={Icon1}
          title="asd"
          parrafo="asdasd"
        />
        <Footer
          image={Icon2}
          title="shdna"
          parrafo="ajnasjkasdjn"
        />
        <Footer
          image={Icon3}
          title="shdna"
          parrafo="ajnasjkasdjn"
        />
        <Footer
          image={Icon4}
          title="shdna"
          parrafo="ajnasjkasdjn"
        />
      </div>
    </>

  )
}

export default App;



