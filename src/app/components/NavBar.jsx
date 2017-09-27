import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signIn: false};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand"> Wall </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/'> <a className="nav-link"> Home <span
                                className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about'><a className="nav-link"> About Wall </a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'><a className="nav-link disabled"> Contact us </a></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to='/login'>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"> Sign in</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"> Sign up</button>
                        </Link>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;