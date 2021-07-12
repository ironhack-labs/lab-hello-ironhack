
import './Section.css'
import Button from './Button'
import ReactLogo from './ReactLogo'
import Navbar from './Navbar'

const Section = () => {

    return (

        <div className="dark">
            <Navbar />
            <div className='container'>
                <div className="leftColumn">
                    <h1 className="dark">Say hello to ReactJS</h1>
                    <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer</h3>
                    <Button link="https://www.ironhack.com/es/madrid" buttonText="Awesome!" newWindow={true} />
                </div>
                <div className="rightColumn">
                    <ReactLogo size='10%' />
                    <ReactLogo size='20%' />
                </div>
            </div>




        </div>


    )
}

export default Section

    // < div className = container >
    //     <div className="row">

    //     </div>
    //     </div >