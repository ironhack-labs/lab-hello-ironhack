import React from "react";
import NavBar from "./components/navBar/NavBar";
import Body from "./components/main/Body";
import "../public/style.css"
import Footer from "./components/footer/Footer";



class App extends React.Component {
  constructor(props) {
    super()
    this.icons = [
      {
        icon: '/images/icon1.png',
        title: 'Declarative',
        desc: 'React makes it painless to create interactive UIs.'
      },
      {
        icon: 'images/icon2.png',
        title: 'Components',
        desc: 'Build encapsulated components that manage their state.'
      },
      {
        icon: 'images/icon3.png',
        title: 'Single way',
        desc: "A set of immutable values are past too the component's."
      },
      {
        icon: 'images/icon4.png',
        title: 'JSX',
        desc: 'Statically-typed design to run on modern browsers.'
      }
    ]
  }
  render() {

    return (

      <div>
        <div className='mainbody'>
        <NavBar
        logo= "images/ironhack-logo.svg"
        menu= "images/menu-top.svg"
        ></NavBar>
        
        <Body
        title= "Say hello to ReactJS"
        subtitle= "You will learn a FrontEnd framework from scratch, to become a Ninja Developer."
        btn= "Awesome!"
        ></Body>
        </div>

        <footer>
          {this.icons.map( (item, i) => (
          <Footer key={i}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          ></Footer>
          ))}
        </footer>
      </div>







    )
  }
  
}







export default App;
