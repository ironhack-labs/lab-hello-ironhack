import './App.css';
import Lettering from './Lettering';



function App() {
  return (
    <div className="App">
        <div className="Backgr">
          <nav><a className="ironhack">
            <img src="/images/menu-top.svg" alt="menu"/></a> 
          <a className="menuBar"><img src="/images/ironhack-logo.svg" alt="ironhacklogo"/></a>
          </nav>
          <Lettering/>
          <cards/>
          <div className="smallLettering">you will learn how to use<br></br> the most popular frontend library,<br></br> 
        and become a super Ninja developer.</div>
        </div>
      <div className="whiteVoid">
      <div class="card-group">
  <div class="card">
    <img src="/images/icon1.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Declarative</h5>
      <p class="card-text">React makes it<br></br>painless to create<br></br>interactiveUIs.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="/images/icon2.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Components</h5>
      <p class="card-text">Build encapsulated<br></br>components that<br></br>interactive UIs</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="/images/icon3.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Single-way</h5>
      <p class="card-text">A set of immutable<br></br> values are passed to<br></br> the components.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="/images/icon4.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">JSX</h5>
      <p class="card-text">Statically-typed,<br></br>designed to run on<br></br>modern browsers.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

        </div>
  );
     
}

export default App;
