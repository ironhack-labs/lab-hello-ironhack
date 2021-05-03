import './App.css';
import Navbar from './Navbar'
import logo from './ironhack-logo.svg'
import menu from './menu-top.svg'
import Header from './Header'

const App = () => {
  return (
    <main>
    
      <Navbar
      image={logo}
      description="logo"
      />
      <Navbar
      image={menu}
       description="menu"
      />
      <Header/>
    </main>
  
    
  )
}

export default App;
