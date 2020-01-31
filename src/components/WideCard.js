import React, { Component } from 'react';


class Widecard extends Component {
    render() {
        return (
            <div className='widecard'>
                <div className='compdet'>
                    <h3>{this.props.title}</h3>
                    <h4 class='secondtext'><a href={this.props.link} target='_blank'>{this.props.where}</a></h4>
                    <h4 class='secondtext'>{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard