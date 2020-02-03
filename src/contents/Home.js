import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me.jpg';
import Social from '../components/Social';


class Home extends Component {
    render() {
        return (
            <div className='condiv home'>
                <img src={profilepic} className='profilepic' alt="me"/>
                <ReactTypingEffect className='typingeffect' text={["My name is Paulo Reizinho", 'I am a developer', 'Welcome to my CV page', '...', 'please UX is very simple', 'click on a section on the left', '...' , 'no need to stay here all day']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}

export default Home