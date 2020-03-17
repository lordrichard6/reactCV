import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me.jpg';
import Social from '../components/Social';
import Tilt from 'react-tilt';


class Home extends Component {
    render() {
        return (
            <div className='section-home col col-lg-9'>
                <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
                    <img src={profilepic} className='profilepic' alt="me"/> 
                </Tilt> 
                <ReactTypingEffect 
                        className='typingeffect' 
                        text={["My name is Paulo Reizinho", 
                            'I am a developer', 
                            'Welcome to my CV page', 
                            '...', 
                            'please UX is very simple', 
                            'click on a section on the left', 
                            '...' , 
                            'no need to stay here all day']} 
                        speed={100} eraseDelay={700} />
                <Social />    
            </div>
        )
    }
}

export default Home