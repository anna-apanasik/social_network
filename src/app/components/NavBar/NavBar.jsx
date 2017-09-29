import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import ButtonsSignUpAndSignIn from "./ButtonsSignUpAndSignIn";
import AuthorizedUser from "./AuthorizedUser";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signIn: false};
    }

    render() {
        const {success} = this.props;

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
                    {success ? (<AuthorizedUser/>) : (<ButtonsSignUpAndSignIn/>)}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        success: state.reducerSignIn.success
    }
}

export default connect(mapStateToProps)(NavBar)
