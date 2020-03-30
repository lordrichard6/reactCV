import React, { Component } from 'react';
import NavigationLink from './NavigationLink';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {'NavigationLinkActive':''}
    }

    activeitem = (x) => {
        if (this.state.NavigationLinkActive.length > 0) {
            document.getElementById(this.state.NavigationLinkActive).classList.remove('active');
        }
        this.setState({'NavigationLinkActive':x}, () => {
            document.getElementById(this.state.NavigationLinkActive).classList.add('active');
        })

    }

    render() {

        const navListItems = document.getElementsByClassName("navigation__item");

        for(let i = 0; i < navListItems.length; i++){ 
            navListItems[i].onclick = () => {
                document.getElementById("navi-toggle").checked = false;
            };
        }

        return (
            <div className='navigation col col-lg-3 col-xl-3'>
                <input className="navigation__checkbox" type="checkbox" id="navi-toggle" />
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon"></span>
                </label>
                <div class="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className='navigation__list'>
                        <NavigationLink item='Home' toLink='/' activec={this.activeitem} />
                        <NavigationLink item='About' toLink='/about' activec={this.activeitem} />
                        <NavigationLink item='Education' toLink='/education' activec={this.activeitem} />
                        <NavigationLink item='Skills' toLink='/skills' activec={this.activeitem} />
                        <NavigationLink item='Experience' toLink='/experience' activec={this.activeitem} />
                        <NavigationLink item='Projects' toLink='/projects' activec={this.activeitem} />
                        <NavigationLink item='Contact' toLink='/contact' activec={this.activeitem} />
                    </ul>
                </nav>
            </div>
            
        )
    }
}

export default Navigation