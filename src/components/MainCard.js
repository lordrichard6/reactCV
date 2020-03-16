import React, { Component } from 'react';
// import Tilt from 'react-tilt';


class MainCard extends Component {
    render() {
        return (
            <div class="card-container">
                <div class="card">
                    <div class="card__image-container">
                        <img class="card__image" src={this.props.img} alt=""/>
                    </div>
                    
                    <svg class="card__svg" viewBox="0 0 800 500">
                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#353130"/>
                        <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
                    </svg>
                    
                    <div class="card__content">
                        <h1 class="card__title">{this.props.title}</h1>
                        <p class='secondtext'><a href={this.props.link} target='_blank' rel='noopener noreferrer'>{this.props.where}</a></p>
                        <p class='secondtext'>{this.props.from} - {this.props.to}</p>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainCard