import React, { Component } from 'react';
import Widecard from '../components/WideCard';


class Education extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title='Administration' where='IEFP Portugal' from='Sep 05' to='Sep 08' text='Administration in a professional school of Ponte de Sor where  studied accounting, mathematics, business, etc. and worked for a year as a intern secretary/accountant.' />
                <Widecard title='Full Stack Developer' link='https://www.udemy.com/' where='Udemy' from='Apr 19' to='Sep 19' text='Online course that gave me knowledge in HTML, CSS, Bootstrap, JavaScript, Node.js, React.js with Redux and some CS concepts.' />
                <Widecard title='Introdution to Computer Science' link='https://www.edx.org/' where='EDX' from='Dez 19' to='Ongoing' text='Excelente course which goes deep in the basic concepts of computer science.' />
            </div>
        )
    }
}

export default Education
