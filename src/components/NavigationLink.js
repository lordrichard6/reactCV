import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavigationLink extends Component {
    render() {
        return (
            <li className='navigation__item' id={this.props.item}>
                <Link className='navigation__link' to={this.props.toLink} onClick={this.props.activec.bind(this, this.props.item)}>
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default NavigationLink