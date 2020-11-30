import "./App.css"
import Title from "./Title"
import Button from "./Button"
import Header from "./Header"

function App() {
    return (
        
        <main className="fondo">
            <header>
                <Header avatar1="https://raw.githubusercontent.com/ironhack-labs/lab-hello-ironhack/1504d84736d35ab8af7e220684d621dcbbfb8db3/public/images/ironhack-logo.svg" />
                <Header avatar2 = "https://raw.githubusercontent.com/ironhack-labs/lab-hello-ironhack/1504d84736d35ab8af7e220684d621dcbbfb8db3/public/images/menu-top.svg"/>
            </header>
            <Title text = "Say hello to ReactJS" />
            <Title paragraph="You will learn how to use the most popular frontend library, and become a super Ninja developer." />
            <Button button="Awesome!" />
        </main>
    )
}

export default App 