import './Header.css'


const Header = props => {
    const subText = <p>{props.subtitleText}</p>
    const mainText = <h1>{props.titleText}</h1>
    const fullComponent = (
        <header className= 'headerName'> 
            {mainText}
            {subText}
        </header>
    )
    return fullComponent
}

export default Header