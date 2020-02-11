import React, { Component } from 'react';


class WorkProj extends Component {
    render() {
        return (
            <div className='workproj'>
              <h4><a href={this.props.proj} target='_blank' rel='noopener noreferrer'>{this.props.name}</a></h4>
              <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default WorkProj