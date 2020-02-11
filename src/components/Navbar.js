import React, { Component } from 'react';
import NavItem from './NavItem';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {'NavItemActive':''}
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul id='menu'>
                    <NavItem item='Home' toLink='/' activec={this.activeitem} />
                    <NavItem item='About' toLink='/about' activec={this.activeitem} />
                    <NavItem item='Education' toLink='/education' activec={this.activeitem} />
                    <NavItem item='Skills' toLink='/skills' activec={this.activeitem} />
                    <NavItem item='Experience' toLink='/experience' activec={this.activeitem} />
                    <NavItem item='Projects' toLink='/projects' activec={this.activeitem} />
                    <NavItem item='Contact' toLink='/contact' activec={this.activeitem} />
                </ul>
            </nav>
        )
    }
}

export default Navbar