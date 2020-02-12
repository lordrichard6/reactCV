import React, { Component } from 'react';
import Social from '../components/Social';


class Contact extends Component {
    render() {
        return (
            <div className='condiv contact'>
                <h1 className='subtopic'>Contact Me</h1>
                <h3>Email : paulolopesreizinho@gmail.com</h3>
                <h3>Tel/Whatsapp : +41 78 798 95 33</h3>
                <button className='btn btn-secondary'><a href="https://drive.google.com/open?id=1aC6wf8iXjnGTodpxmtn3mutlQwl33uv8" target='_blank' rel='noopener noreferrer'>PDF CV</a></button>
                <Social />
            </div>
        )
    }
}

export default Contact