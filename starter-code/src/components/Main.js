import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                <section className='section-one'>
                    <div className='section-wrapper'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png' />
                        </div>
                        <div className='tag-line'>
                            <h1>Tinkerer of Doom</h1>
                            <h3>Nihilist genius scientist who hates himself, but hates everyone even more.</h3>
                        </div>
                    </div>
                </section>
                <section className='section-one'>
                    <div className='section-wrapper'>
                        <p>
                            Rick Sanchez from Earth dimension C-137 is the father of Beth Smith, and the grandfather 
                            of Morty Smith and Summer Smith. He is said to have been away from the family for several 
                            years prior to the events of the show. He frequently travels on adventures through space 
                            and other planets and dimensions with his grandson Morty. In the third season of the show, 
                            it is revealed that he is 70 years old. Rick is portrayed as a mad scientist; utilizing 
                            his mathematical and scientific prowess in conjunction with apathy and egotistical cynicism, 
                            he emerges safely from any situation, regardless of the consequences of his self-preservation. 
                            Rick also, in some episodes, desperately tries to regain his family after losing their trust. 
                            The creators wanted him to look like he was in control strategically, but not at all when it came 
                            to personal matters. 
                        </p>
                        <p>
                            In "The Ricks Must Be Crazy", Rick reveals that he powers his flying car with a battery that contains 
                            a miniature universe, or microverse, whose inhabitants unknowingly provide the required electricity. 
                            In the episode, the inhabitants cease to provide Rick's car with energy. This is because a scientist 
                            from the microverse, resembling Rick in many ways, has created his own miniature universe to supply 
                            energy for the beings of his universe. Rick destroys the miniature universe inside his own miniature 
                            universe, killing everyone inside. He does not demonstrate remorse for his actions, and instead shows 
                            satisfaction. Nearing the end of the episode, Rick knows that his own microverse would power his 
                            battery, or he would toss them out and create a new one.
                        </p>
                    </div>
                </section>   
                <section className='pictures'>
                    <div className='gallery'>
                        <img src='https://sfzone1-legalbrandmarket.netdna-ssl.com/wp-content/uploads/2017/09/rick_gun-1024x550.jpg' />
                        <img src='https://dotandline.net/wp-content/uploads/2017/09/1_iODe3_IsNtyc-2ZnjtaROg.jpeg' />
                        <img src='https://nerdist.com/wp-content/uploads/2019/03/cyborg-pickle-rick-362019-1200x676.jpg' />
                    </div>
                </section>
            </div>
        )
    }
}
