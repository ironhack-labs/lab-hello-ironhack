import React from 'react'; // <== import React
import './app.css';
 
const App = () => {
  return(
      <div className="appMain">
          <div className="topSection">
             <nav>
                 <img src="/images/ironhack-logo.svg"/>
                 <img src="/images/menu-top.svg"/>
             </nav>
             <div className="topSectionText">
                 <h1>Say hello to React JS</h1>
                 <p>You will learn how to use the most popular frontEnd library , and become a super ninja developer. </p>
                 <button>Awsome!</button>
             </div>
          </div>
          <div className="bottomSection">

          </div>
      </div>
  )

};
 
export default App;