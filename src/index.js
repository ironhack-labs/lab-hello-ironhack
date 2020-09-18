import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
const headerStyle = {
    backgroundColor:'rgb(31,36,54)',
    height: 'calc(100vh - 24px)',
    padding: '24px 64px 0 64px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}
const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const titleStyle = {
    color: 'white',
    fontSize: 86,
    margin: 0
};

const subtitleStyle = {
    color: 'white',
    fontSize: 24
}

const ctaStyle = {
    width: 190,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 4,
    fontSize: 24,
    marginBottom: 64
};

const bodyStyle = {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '100px 64px'
};

const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 140

};

const infoImage = {
    width: 140
};
const infoTitle = {
    fontSize: 24
};
const infoDescription = {
    color: 'dimgrey'
};
const logoStyles = [
    {
        position: 'absolute',
        top: 30,
        right: 300
    },
    {
        position: 'absolute',
        top: 300,
        right: 200
    },
    {
        position: 'absolute',
        bottom: 0,
        right: 400
    },
    {
        position: 'absolute',
        top: 200,
        right: -40,
        width: 150
    },
    {
        position: 'absolute',
        top: 400,
        right: -40,
        width: 150
    }
    ,{
        position: 'absolute',
        top: 580,
        right: -40,
        width: 150
    }
]

ReactDOM.render(
    <div id="container">
        <section style={headerStyle}>
            <div style={navbarStyle}>
                <img src='../images/ironhack-logo.svg' />
                <img src='../images/menu-top.svg' />
            </div>
            <div>
                <h1 style={titleStyle}>Say hello to <br/> ReactJS</h1>
                <span style={subtitleStyle}>You will learn Frontend <br/>
                framework from scracht, to <br/>
                become a Ninja Developer.
            </span>
            </div>
            <div style={ctaStyle}>Awesome!</div>
        </section>
        
        <section style={bodyStyle}>
            <div style={infoStyle}>
                <img style={infoImage} src="../images/icon1.png" />
                <span style={infoTitle}>Declarative</span>
                <span style={infoDescription}>React makes it painles to create interactive UI</span>
            </div>
            <div style={infoStyle}>
                <img style={infoImage} src="../images/icon2.png" />
                <span style={infoTitle}>Components</span>
                <span style={infoDescription}>Build encapsulated components that manage their states</span>
            </div>
            <div style={infoStyle}>
                <img style={infoImage} src="../images/icon3.png" />
                <span style={infoTitle}>Single-way</span>
                <span style={infoDescription}>A set of immutable values are passed to the components</span>
            </div>
            <div style={infoStyle}>
                <img style={infoImage} src="../images/icon4.png" />
                <span style={infoTitle}>JSX</span>
                <span style={infoDescription}>Statically-tiped, designed to run on modern browsers</span>
            </div>
        </section>

        {[0,1,2,3,4,5].map((el) => (
            <img style={logoStyles[el]} src='../images/react-logo.svg'/>
        ))}
    </div>
, document.getElementById('root'));
