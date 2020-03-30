import React, { Component } from 'react';
import MainCard from '../components/MainCard';

import edu1 from '../img/edu-1.jpg';
import edu2 from '../img/edu-2.png';
import edu3 from '../img/edu-3.png';
import edu4 from '../img/edu-4.jpg';


class Education extends Component {
    render() {
        return (
            <div className='section-education col col-lg-9'>
                <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h1 className='heading-secondary'>My Education</h1>
                </div>
                <div className="row">
                    <div className="col col-lg-6">
                        <MainCard  img={edu1}
                                    title='Administration' 
                                    where='IEFP Portugal' 
                                    from='Sep 05' to='Sep 08' 
                                    text='Administration in a professional school of Ponte de Sor where studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant.' />
                    </div>
                    <div className="col col-lg-6">                
                        <MainCard  img={edu2}
                                    title='The Complete Web Developer in 2019 - Zero to Mastery' 
                                    link='https://www.udemy.com/share/101WcUB0UScVdSTHQ=/' 
                                    where='Udemy' 
                                    from='Apr 19' to='Sep 19' 
                                    text='Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js React.js with Redux, PostgressSQL, SQL.' />
                    </div>
                    <div className="col col-lg-6">
                        <MainCard  img={edu3}
                                    title='CS50 - Introdution to Computer Science' 
                                    link='https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/' 
                                    where='EDX' 
                                    from='Dez 19' to='Ongoing' 
                                    text='Excelente course which goes deep in the basic concepts of computer science such as algorithms and data structures. And also teaches C, Python and SQL.' />
                    </div>
                    <div className="col col-lg-6">                
                        <MainCard  img={edu4}
                                    title='Advanced CSS and Sass' 
                                    link='https://www.udemy.com/share/101WkwB0UScVdSTHQ=/' 
                                    where='Udemy' 
                                    from='Mar 20' to='Ongoing' 
                                    text='This course teaches tons of modern CSS techniques, advanced CSS animations, Flexbox layouts, CSS Grid layouts and more.' />
                    </div>    
                </div>
            </div>
        )
    }
}

export default Education
