import React, { Component } from 'react';
import MainCard from '../components/MainCard';

import edu1 from '../img/edu-1.jpg';
import edu2 from '../img/edu-2.jpg';
import edu3 from '../img/edu-3.jpg';


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
                                    text='Administration in a professional school of Ponte de Sor where  studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant.' />
                    </div>
                    <div className="col col-lg-6">                
                        <MainCard  img={edu2}
                                    title='Full Stack Developer' 
                                    link='https://www.udemy.com/' 
                                    where='Udemy' 
                                    from='Apr 19' to='Sep 19' 
                                    text='Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, React.js with Redux and some CS concepts.' />
                    </div>
                    <div className="col col-lg-6">
                        <MainCard  img={edu3}
                                    title='Introdution to Computer Science' 
                                    link='https://www.edx.org/' 
                                    where='EDX' 
                                    from='Dez 19' to='Ongoing' 
                                    text='Excelente course which goes deep in the basic concepts of computer science.' />
                    </div>    
                </div>
            </div>
        )
    }
}

export default Education
