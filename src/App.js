import logo from './logo.svg';
import './App.css';
import image from './foto.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <section id="blueRect">
          <div id="letrasBlancas">
            <h1>Say hello to reactJS</h1>
            <br/>

          </div>
          <div class="parrafosBlancos">
            <p>You will learn how to use </p>
            <p>the most popular front end library</p>
            <p>and become a super ninja developer</p>

          </div>
          <button type="button" class="btn btn-light">Awesome!</button>

      </section>


     <section id="threeElements">
       <div class="h2-wrapper">
         <div class="container">
           <img src={icon1} alt="Millions of Songs on Spotify"/>
           <h3> Declarative</h3>
           <p> There are millions of songs on Spotify</p>
         </div>
         <div class="container">
         <img src={icon2} alt="Millions of Songs on Spotify"/>

           <h3> Components</h3>
           <p>Listen to music as if you were listening live</p>
         </div>
         <div class="container">
         <img src={icon3} alt="Millions of Songs on Spotify"/>
           <h3>Single Ways</h3>
           <p> Stream music on your smartphone, tablet or computer</p>
         </div>
         <div class="container">
         <img src={icon4} alt="Millions of Songs on Spotify"/>
           <h3>JSX</h3>
           <p> Stream music on your smartphone, tablet or computer</p>
         </div>
       </div>
     </section>




    </div>
  );
}

export default App;
