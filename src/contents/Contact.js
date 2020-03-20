import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

import Social from '../components/Social';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit(e) {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        const { name, email, subject, message } = this.state

        let templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Paulo',
            subject: subject,
            message_html: message
        }

        emailjs.send(
            'gmail',
            'template_6QvYHodn',
            templateParams,
            'user_Dtt1pCP52n6IfaS0Lr5wt'
        )

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            buttonText: 'Message Sent'
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    
    render() {
        return (
            <div className='section-contact col col-xl-9'>
                <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h1 className='heading-secondary'>Contact Me</h1>
                </div>
                {/* <h2>Email : paulolopesreizinho@gmail.com</h2>
                <h2>Tel/Whatsapp : +41 78 798 95 33</h2>
                <button className='btn btn-secondary'><a href="https://drive.google.com/open?id=1aC6wf8iXjnGTodpxmtn3mutlQwl33uv8" target='_blank' rel='noopener noreferrer'>PDF CV</a></button> */}
                <form class="cf" id="contact-form" method="POST" onSubmit={this.handleSubmit.bind(this)}>
                    <div class="half left cf">

                        <input  type="text" 
                                id="input-name" 
                                placeholder="Name" 
                                maxlength="50" 
                                value={this.state.name}
                                onChange={this.handleChange.bind(this, 'name')}
                                required/>

                        <input  type="email" 
                                id="input-email" 
                                placeholder="Email address" 
                                maxlength="50" 
                                value={this.state.email}
                                onChange={this.handleChange.bind(this, 'email')} 
                                required/>

                        <input  type="text" 
                                id="input-subject" 
                                placeholder="Subject" 
                                maxlength="100"
                                value={this.state.subject} 
                                onChange={this.handleChange.bind(this, 'subject')}
                                required/>

                    </div>
                    <div class="half right cf">

                        <textarea   name="message" 
                                    type="text" 
                                    id="input-message" 
                                    placeholder="Message" 
                                    maxlength="1000"
                                    value={this.state.message} 
                                    onChange={this.handleChange.bind(this, 'message')}
                                    required></textarea>

                    </div>  
                    <input type="submit" id="input-submit" value={this.state.buttonText}/>
                </form>
                <div className="row align-items-start justify-content-center">
                    <Social />
                </div>
            </div>

        )
    }

}

export default Contact