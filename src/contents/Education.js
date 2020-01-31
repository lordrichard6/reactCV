import React, { Component } from 'react';
import Widecard from '../components/WideCard';


class Education extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title='Administration' where='IEFP Portugal' from='Sep 05' to='Sep 08' />
                <Widecard title='Full Stack Developer' link='https://www.udemy.com/' where='Udemy' from='Apr 19' to='Sep 19' />
                <Widecard title='Introdution to Computer Science' link='https://www.edx.org/' where='EDX' from='Dez 19' to='Ongoing' />
            </div>
        )
    }
}

export default Education
