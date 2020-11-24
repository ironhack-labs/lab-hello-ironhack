import { findRenderedComponentWithType } from "react-dom/test-utils"

const Header = () => {
    const styles =  {
        background: '#1f2536',
        height: '400px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'white',
        padding: '10px 50px 50px'

    }

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        width: '40vw'
    }
    
    return (
        <div className = "header" style={styles}>
            <div className = "navBar">
                <img style={{height: '35px'}} src='./images/ironhack-logo.svg'/>
            </div>
            <div style={headerStyle}>
                <h1>Say Hello to ReactJS</h1>
                <p>You will learn how to use the most populsr frontend library, and become a super Ninja developer.</p>
                <br/>
                <a href="#">
                    <button style={{padding:'10px'}}>
                        Awesome!
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Header