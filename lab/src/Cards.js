export default function Cards(){
    const image1 = './images/icon1.png'
    const image2 = './images/icon2.png'
    const image3 = './images/icon3.png'
    const image4 = './images/icon4.png'

    return( 
    <div style={{backgroundColor: "white", display: "flex", width: "100vw", justifyContent:"space-evenly", paddingTop:"70px"}}>
        <div style={{padding: "30px"}}>
            <img src={image1} style={{width: "90px"}}/>
            <h3>Declarative</h3>
            <p style={{fontSize: "12px"}}>React makes it<br/>painless to create<br/>interactive UIs.</p>
        </div>
        <div style={{padding: "30px"}}>
            <img src={image2} style={{width: "90px"}}/>
            <h3>Components</h3>
            <p style={{fontSize: "12px"}}>Build encapsulated<br/>components that<br/>manage their state.</p>
        </div>
        <div style={{padding: "30px"}}>
            <img src={image3} style={{width: "90px"}}/>
            <h3>Single-Way</h3>
            <p style={{fontSize: "12px"}}>A set of immutable<br/>values are passed to<br/> the component's.</p>
        </div>
        <div style={{padding: "30px"}}>
            <img src={image4} style={{width: "90px"}}/>
            <h3>JSX</h3>
            <p style={{fontSize: "12px"}}>Statically-typed<br/>designed to run on<br/>modern browsers.</p>
        </div>
    </div>
    )}