import './App.css'



const Header = props => {
    const className = "header"
    const fullComponent = (
        <>
            <header className={className}>
             <h1>Say Hello To <br></br>ReactJS</h1>
             <p>You will learn how to use <br></br>the most popular frontend library,<br></br>and become a super ninja developer.</p>
             <button>Awesome!</button>
            
            
            </header>
        </>
    )
    return fullComponent
}



export default Header