import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Social from '../components/Social';

import me1 from '../img/me1.jpg';
import me2 from '../img/me2.jpg';
import me3 from '../img/me3.jpg';


class Home extends Component {
    render() {
        return (
            <div className='section-home col col-lg-9'>
                <div className="profile">
                    <img src={me2} className='profile__photo profile__photo--2' alt="me"/> 
                    <img src={me3} className='profile__photo profile__photo--3' alt="me"/>
                    <img src={me1} className='profile__photo profile__photo--1' alt="me"/> 
                </div>
                
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