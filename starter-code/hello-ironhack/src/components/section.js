import React from 'react'



const Section = (props) => {
  return (
    <div className="hello">
      <section className="section">
       <h1 className="header"> Say hello to ReactJS</h1>
       <p> You will learn a frotend <br></br> framework from scratch, to <br></br> become an Ninja Developer</p>
      {props.children}
      </section>
      <section className="sectionTwo">
      {/* <img className="image" src={reactlogo} alt=""/> */}
      </section>
      </div>
    )
  }
  
  export default Section;