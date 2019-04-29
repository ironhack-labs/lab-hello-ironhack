import React from "react";
import NavBar from './Components/navBar';
import Body from './Components/body';
import Footer from './Components/footer';
import "./app.css"

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Body />
                <Footer />

                
            </div>

        )
    }
}

export default App;