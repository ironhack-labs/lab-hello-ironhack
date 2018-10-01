import React from "react";

export  const Cabecera = ({image, image2, title, subtitle, button}) => {
    return (
        <div style={{backgroundColor: "rgb(31,36,53)", height: "500px" }}>
            <header style={{backgroundImage: "url(images/react-logo.svg)", height: "500px", backgroundRepeat: "no-repeat"}}>
                <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", width:"90%", margin:"0 auto", paddingTop:"50px"}}>
                    <img src={image}/>
                    <img src={image2}/>
                </div   >
                <div style={{width:"90%", margin:"200px auto"}}>
                    <h1 style={{color:"white"}}>{title}</h1>
                    <p style={{color:"white"}}>{subtitle}</p>
                    <button type="button" >{button}</button>
                </div>
            </header>
        </div>
    )
}