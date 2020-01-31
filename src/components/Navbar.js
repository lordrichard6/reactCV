import React, { component } from 'react';
import Navitem from './NavItem';


class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavItem item='Home' toLink='/' />
                    <NavItem item='About' toLink='/about' />
                    <NavItem item='Education' toLink='/education' />
                    <NavItem item='Skills' toLink='/skills' />
                    <NavItem item='Contact' toLink='/contact' />
                </ul>
            </nav>
        )
    }
}

export default Navbar