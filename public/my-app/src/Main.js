import Card from './Card'
import './Main.css'

const Main = () => {


    return (
        <main className="flex-container">
            <div className="flex-item">
                <Card src="../images/icon1.png" alt="icon1" title="Declarative" description="React makes it painless to create interactive UIs" />

            </div>
            <div className="flex-item">
                <Card src="../images/icon2.png" alt="icon2" title="Declarative" description="React makes it painless to create interactive UIs" />


            </div>
            <div className="flex-item">
                <Card src="../images/icon3.png" alt="icon3" title="Declarative" description="React makes it painless to create interactive UIs" />

            </div>
            <div className="flex-item">
                <Card src="../images/icon4.png" alt="icon4" title="Declarative" description="React makes it painless to create interactive UIs" />


            </div>
        </main>
    )
}

export default Main