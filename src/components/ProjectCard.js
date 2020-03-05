import React, { Component } from 'react';


class ProjectCard extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${this.props.back})`, color: 'black'}} className='projectcard'>
                <a href={this.props.link} target='_blank' rel='noopener noreferrer'>
                    <div style={this.props.background} className='compdet'>
                        <h3>{this.props.title}</h3>
                        <h4 class='secondtext'>{this.props.tool}</h4>
                        <p class='text'>{this.props.text}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default ProjectCard