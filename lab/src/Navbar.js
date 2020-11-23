export default function Navbar(){
    const logo = '../images/ironhack-logo.svg'
    const menu = '../images/menu-top.svg'
    return <nav style={{display: "flex", justifyContent: "space-between"}}>
        <img src={logo} style={{height: "30px"}}/>
        <img src={menu} style={{width: "15px"}}/>
    </nav>
}