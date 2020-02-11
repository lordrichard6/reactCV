import React, { Component } from 'react';
import Widecard from '../components/WideCard';
import WorkProj from '../components/WorkProj';


class Experience extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Experience</h1>
                <Widecard 
                    title='Front Dev Intern' 
                    link='https://feinheit.ch/' 
                    where='Feinheit' 
                    from='Aug 19' to='Jan 20'
                    text='My first professional experience as a Front End Web Developer,  where i worked mainly with HTML and SASS but learn Python with Django which was our main tool.'
                />
                <h2 className='subtopic'>Associated Projects</h2>
                <WorkProj proj='https://bezahlbare-wohnungen.ch/' name='- bezahlbare Wohnungen' />
                <WorkProj proj='http://www.protier.ch/' name='- protier' />
                <WorkProj proj='https://litra.ch/de/' name='- litra' />
                <WorkProj proj='https://feinheit.ch/' name='- Feinheit' />  
            </div>
        )
    }
}

export default Experience