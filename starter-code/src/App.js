import React from "react"
import "../public/index.css"

class App extends React.Component{

  render(){
    return (
      <div className="body1">

        <div className="container">
          <h1>Say hello to<br/> ReactJS</h1>
          <p>You will learn a Frontend<br/>
          framework from scratch, to<br/>
          became an Ninka Developer</p>
          <button>Awesome!</button>
        </div>
        <div id="iconContainer">
          <img src="icon1.png" height="100xp"></img>
          <img src="icon2.png" height="100xp"></img>
          <img src="icon3.png" height="100xp"></img>
          <img src="icon4.png" height="100xp"></img>
        </div>
        
      </div>
    )
  }
}

export default App