import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

import img1 from '../img/img-1.png';
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.jpg';
import img4 from '../img/img-4.png';
import img7 from '../img/img-7.png';
import img8 from '../img/img-8.png';
import img9 from '../img/img-9.jpg';


class Projects extends Component {
    render() {
        return (
            <div className='section-projects col col-lg-9'>

                <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h1 className='heading-secondary'>My Projects</h1>
                </div>

                <div className="row justify-content-center">
                    <ProjectCard 
                                back={img9} 
                                title='Skytours' 
                                link='https://reizinho-skytours.netlify.com/' 
                                tool1='React'
                                tool2='Sass'
                                tool3='Responsive'
                                tool4='Modern UI'
                                tool5='HTML5'/>
                    <ProjectCard 
                                back={img8} 
                                title='Monkey Circus' 
                                link='https://monkeycircus-2z4e865i4.now.sh' 
                                tool1='React'
                                tool2='Next.js'
                                tool3='Data fetching'
                                tool4='SSR'
                                tool5='SPA'/>
                    <ProjectCard 
                                back={img1} 
                                title='Face Detection App' 
                                link='https://pauloreizinho-facerecognition.netlify.com/' 
                                tool1='React'
                                tool2='Image recognition API'
                                tool3='PWA'
                                tool4='CSS'
                                tool5='HTML5'/>
                    <ProjectCard 
                                back={img2} 
                                title='RoboFriends' 
                                link='https://lordrichard6.github.io/robofriends/' 
                                tool1='React'
                                tool2='Redux'
                                tool3='Responsive'
                                tool4='CSS'
                                tool5='HTML5'/>
                    <ProjectCard 
                                back={img7} 
                                title='To Do' 
                                link='https://lordrichard-svelte-todo.netlify.com/' 
                                tool1='Svelte 3'
                                tool2='CSS'
                                tool3='HTML5'
                                tool4='Responsive'
                                tool5=''/>
                    <ProjectCard 
                                back={img3} 
                                title='Netflix Copy' 
                                link='https://pauloreizinho-netflix.netlify.com/' 
                                tool1='HTML5'
                                tool2='CSS'
                                tool3='JavaScript'
                                tool4='Responsive'
                                tool5=''/>
                    <ProjectCard 
                                back={img4} 
                                title='FlappyBird' 
                                link='https://pauloreizinho-flappybird.netlify.com/' 
                                tool1='Vanila JS'
                                tool2='HTML'
                                tool3='CSS'
                                tool4='Game'
                                tool5=''/>
                </div>
                
            </div>
        )
    }
}

export default Projects