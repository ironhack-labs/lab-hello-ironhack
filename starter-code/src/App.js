import React, {
    Component
} from "react";
import "./App.css"
import Header from "./Containeer/Header"
import Icons from "./Containeer/Icons"

class App extends Component {
    render() {
        return ( 
            <div>
            <Header />
            <Icons />
            </div>
            )
    }
}
export default App;