
import './App.css';
import Title from "./Title"
import Logo from "./Logo"
import logoIron from "./ironhack-logo.svg"
import menu from "./menu-top.svg"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import icon4 from "./icon4.png"
import Button from "./Button"
function App() {
  return (
    <>

      <div class="container">
        <div class="row justify-content-between">
          <div class="col-2">
            <Logo
              image={logoIron}

            />
          </div>
          <div class="col-2">
            <Logo
              image={menu}

            />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-4">

            <Title theTitle="Say Hello to ReactJS" />
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>

            <Button
              link="#"
              buttonText="Awesome!!"
            />
          </div>
        </div>
      </div>

      <hr></hr>


      <footer class="white">
        <div class="container">
          <div class="row">
            < div class="col-3 space">

              <Logo
                image={icon1}
                text="Declarative"
                content="React makes it painless to create interative UIs"
              />
            </div>
            < div class="col-3 space">
              <Logo
                image={icon2}
                text="Components"
                content="Build encapsulated components that manage their state"
              /></div>
            < div class="col-3 space">
              <Logo
                image={icon3}
                text="Single way"
                content="Asset of inmutable values are passed to the components"
              />
            </div>
            < div class="col-3 space">
              <Logo
                image={icon4}
                text="JSX"
                content="Statically typed design to run on modern browsers"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
