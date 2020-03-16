import React, { Component } from 'react';
import axios from 'axios';

import Social from '../components/Social';


class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        sent: false,
        buttonText: 'Submit'
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            buttonText: 'Message Sent'
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('https://react-cv-node.now.sh/', data)
            .then( res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch( () => {
                console.log('Message not sent')
            })
    }

    render() {
        return (
            <div className='section-contact col col-lg-9'>
                <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h1 className='heading-secondary'>Contact Me</h1>
                </div>
                {/* <h2>Email : paulolopesreizinho@gmail.com</h2>
                <h2>Tel/Whatsapp : +41 78 798 95 33</h2>
                <button className='btn btn-secondary'><a href="https://drive.google.com/open?id=1aC6wf8iXjnGTodpxmtn3mutlQwl33uv8" target='_blank' rel='noopener noreferrer'>PDF CV</a></button> */}
                <form class="cf" id="contact-form" onSubmit={ (e) => this.formSubmit(e)} method="POST">
                    <div class="half left cf">
                        <input type="text" id="input-name" placeholder="Name" maxlength="50" onChange={e => this.setState({ name: e.target.value})} value={this.state.name} required/>
                        <input type="email" id="input-email" placeholder="Email address" maxlength="50" onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} required/>
                        <input type="text" id="input-subject" placeholder="Subject" maxlength="100" onChange={(e) => this.setState({ subject: e.target.value})} value={this.state.subject} required/>
                    </div>
                    <div class="half right cf">
                        <textarea name="message" type="text" id="input-message" placeholder="Message" maxlength="1000" onChange={e => this.setState({ message: e.target.value})} value={this.state.message} required></textarea>
                    </div>  
                    <input type="submit" value={this.state.buttonText} id="input-submit"/>
                </form>
                <Social />
            </div>

        )
    }

}

export default Contact