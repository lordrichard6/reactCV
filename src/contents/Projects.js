import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

import img1 from '../img/img-1.png';
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.png';
import img4 from '../img/img-4.png';
import img7 from '../img/img-7.png';
import img8 from '../img/img-8.png';


class Projects extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Personal Projects</h1>
                <ProjectCard back={img8} title='Monkey Circus' link='https://monkeycircus-2z4e865i4.now.sh' tool='Next.js' text=''/>
                <ProjectCard back={img1} title='Face Detection App' link='https://pauloreizinho-facerecognition.netlify.com/' tool='React.js' text=''/>
                <ProjectCard back={img2} title='RoboFriends' link='https://lordrichard6.github.io/robofriends/' tool='React-Redux' text=''/>
                <ProjectCard back={img7} title='To Do' link='https://lordrichard-svelte-todo.netlify.com/' tool='Svelte.js' text=''/>
                <ProjectCard back={img3} title='Netflix' link='https://pauloreizinho-netflix.netlify.com/' tool='HTML5, CSS' text=''/>
                <ProjectCard back={img4} title='FlappyBird' link='https://pauloreizinho-flappybird.netlify.com/' tool='Vanila JS' text=''/>
            </div>
        )
    }
}

export default Projects