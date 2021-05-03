import './App.css'



const Navbar = props => {
    const className = "navigator"
    const fullComponent = (
        <>
            <nav className={className}>
             <img src={props.image} alt={props.description} />
            
            </nav>
        </>
    )
    return fullComponent
}



export default Navbar