import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>About me</h1>
                <h4>Olá, my name is</h4>
                <h2>Paulo R. Lopes Reizinho </h2>
                <h4>and i'm a</h4>
                <h3>Front-end <u>Developer</u></h3>
                <br/>
                <p>
                First of all welcome to cv react page, i came from Portugal long time ago searching for ambition,<br/> 
                i've studied administration, which i found to be boring by the end of it,<br/>
                then tried some jobs but none gave me pleasure in the long haul,<br/>
                then i found web development and discover that i really like to build stuff that could be used by millions... <br/> 
                Long story short i don't have a Computer Science degree but i can learn whatever language,<br/>
                framework or tool that is in my way to become a successfull developer. <br/>
                I'm fluent in portuguese(really!), aswell as in English, pretty good with Spanish and not bad with German,<br/>
                the last one has giving me a bit of headache but i will eventually get there,<br/> 
                i'm a team player and an ambitious person with the desire to learn from others. 
                </p>
            </div>
        )
    }
}

export default About