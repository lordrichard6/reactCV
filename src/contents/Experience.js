import React, { Component } from 'react';
import Widecard from '../components/WideCard';


class Experience extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Work Experience</h1>
                <Widecard title='Front Dev Intern' link='https://feinheit.ch/' where='Feinheit' from='Aug 19' to='Jan 20' />
                {/* <Widecard title='title' where='place' from='from' to='to' /> */}
            </div>
        )
    }
}

export default Experience