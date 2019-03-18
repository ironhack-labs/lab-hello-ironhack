import React from 'react'
function Parts(props){
return (
    <section class="section-react">

    <article class="article-react">
    <figure class="icon-react">
       <img src="../images/icon1.png"/>
       </figure>
    <h3>Declarative</h3>
    <h4>React makes it <br/> painless to create <br/> interactive UIs</h4>
        </article>

        <article class="article-react">
        <figure class="icon-react">
           <img src="../images/icon2.png"/>
           </figure>
        <h3>Components</h3>
        <h4>Buid encapsulated <br/> components that  <br/> manage their state</h4>
            </article>

            <article class="article-react">
            <figure class="icon-react">
               <img src="../images/icon3.png"/>
               </figure>
            <h3>Single-Way</h3>
            <h4>A set of inmutable <br/> values ares passed to <br/> the components</h4>
                </article>

                <article class="article-react">
                <figure class="icon-react">
                   <img src="../images/icon4.png"/>
                   </figure>
                <h3>JSX</h3>
                <h4>Statically-typed,<br/> designed to run on <br/> modern browsers</h4>
                    </article>


    </section>
)
}
export default Parts;