import React, {Component} from 'react';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signIn: false};
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Wall</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Wall</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Contact us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" data-toggle="modal"
                                data-target="#SignIn"> Sign in
                        </button>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"> Sign up</button>
                    </form>
                </div>
            </nav>
        );
    }
}
export default NavBar;