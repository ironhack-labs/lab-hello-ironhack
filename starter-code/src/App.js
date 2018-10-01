import React from "react";

const Description = ({ src, title, content }) => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "#1f2535",
            width:"25%"
        },
        img: {
            marginLeft: "-2vw"
        },
        h2: {
            margin:0,
            fontSize:"32px",
            letterSpacing:"2px"
        },
        p: {
            margin:0,
            fontSize:"20px",
            width:"70%"
        }

    };
    return (
        <div style={styles.container}>
            <img style={styles.img} src={src} />
            <h2 style={styles.h2} >{title}</h2>
            <p style={styles.p} >{content}</p>
        </div>
    );
};
const Header = () => {
    const styles = {
        wrapper:{
            width:"50%",
            margin:"80px 0"
        },
        header:{
            color:"white",
            backgroundColor:"#1f2535",
            padding:"20px 80px"
        },
        nav:{
            display:"flex",
            justifyContent:"space-between",
            marginBottom:"120px"
        },
        h1:{
            fontSize:"100px",
            margin:"0"
        },
        p:{
            margin:0,
            fontSize:"27px",
            width:"60%",
            fontWeight:"light"
        },
        button:{
            margin:"80px 0 40px",
            padding:"20px",
            fontSize:"27px",
            color:"#1f2535",
            borderRadius:"5px",
            borderStyle:"none"
        }
    }
    return (
        <header style={styles.header}>
                <nav style={styles.nav}>
                    <img src="/images/ironhack-logo.svg" />
                    <img src="/images/menu-top.svg" />
                </nav>
                <div style={styles.wrapper}>
                    <h1 style={styles.h1}>Say hello to ReactJS</h1>
                    <p style={styles.p}>
                        You will learn a Frontend framework from scratch, to become a Ninja
                        Developer.
                    </p>
                    <button style={styles.button}> Awesome!</button>
                </div>
            </header>
    );
};
export const App = () => {
    const styles ={
        wrapper:{
            fontFamily:"sans-serif"
        },
        section:{
            display:"flex",
            padding:"80px",
            justifyContent:"center"
        }
    }
    return (
        <div style={styles.wrapper}>
            <Header></Header>
            <section style={styles.section}>
                <Description
                    src="/images/icon1.png"
                    title="Declarative"
                    content="React makes it painless to create interactive UIs"
                />
                <Description
                    src="/images/icon2.png"
                    title="Components"
                    content="Build encapsulated componenets that manage their state"
                />
                <Description
                    src="/images/icon3.png"
                    title="Single-Way"
                    content="A set of immutable values are passed to the component's"
                />
                <Description
                    src="images/icon4.png"
                    title="JSX"
                    content="Statically-typed, designed to run on modern browsers"
                />
            </section>
        </div>
    );
};
