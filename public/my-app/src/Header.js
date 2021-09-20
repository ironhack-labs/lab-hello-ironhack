import './Header.css'
import Navbar from './Navbar'
import Button from './Button'
import FirstSection from './FirstSection'

const Header = (props) => {

    const { title, subtitle, link } = props

    return (
        <header>

            <Navbar />


            <FirstSection title={title} subtitle={subtitle} link={link}/>
          

        </header>

    )
}

export default Header