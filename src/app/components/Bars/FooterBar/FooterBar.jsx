import React from 'react';
import {Link} from 'react-router-dom';

class FooterBar extends React.Component {
    render() {
        return (<nav className="navbar fixed-bottom navbar-light bg-light">
            <a className="navbar-brand">&copy; 2017 The Wall</a>
            <form className="form-inline my-2 my-lg-0">
                <Link to='/about_us'>
                    <a className="nav-link">About us</a>
                </Link>
                <Link to='/contact_us'>
                    <a className="nav-link">Contact us</a>
                </Link>
            </form>
        </nav>)
    }
}

export default FooterBar;