import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

import img1 from '../img/img-1.png';
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.png';
import img4 from '../img/img-4.png';
import img5 from '../img/img-5.png';
import img6 from '../img/img-6.png';
import img7 from '../img/img-7.png';


class Projects extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Personal Projects</h1>
                <ProjectCard back={img7} title='To Do' link='https://github.com/lordrichard6/svelte_todo' tool='Sveltejs' text=''/>
                <ProjectCard back={img1} title='Face Detection App' link='https://reizinho-face-detect-app.herokuapp.com/' tool='Reactjs' text=''/>
                <ProjectCard back={img2} title='RoboFriends' link='https://github.com/lordrichard6/robofriends' tool='React-Redux' text=''/>
                <ProjectCard back={img3} title='Netflix' link='https://pauloreizinho-netflix.netlify.com/' tool='HTML5, CSS' text=''/>
                <ProjectCard back={img4} title='FlappyBird' link='https://pauloreizinho-flappybird.netlify.com/' tool='Vanila JS' text=''/>
                <ProjectCard back={img5} title='Calculator' link='https://pauloreizinho-calculator.netlify.com/' tool='Vanila JS' text=''/>
                <ProjectCard back={img6} title='Old Portfolio' link='https://pauloreizinho-portfolio2.netlify.com/' tool='HTML5, CSS' text=''/>
            </div>
        )
    }
}

export default Projects