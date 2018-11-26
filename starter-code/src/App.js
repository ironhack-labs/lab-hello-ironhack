import React, {Component} from "react";

import "./App.css";

class App extends Component {
    //every component class needs a "render ()" method
    //(determines the components content)
    render(){
        //return the HTML of this component in "render()"
        return(
            //USe "className" instead of "class" for styling
        <div className="App"> 
         </div>
       );
    }
}

//export your component CLASS so that you can display it in other files
export default App;