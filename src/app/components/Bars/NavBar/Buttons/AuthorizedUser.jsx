import './stylesForButtons.less'
import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'

class AuthorizedUser extends React.Component {
    render() {
        return (
            <div className="AuthorizedUser btn-group">
                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    User
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link to='/profile'>
                        <button className="dropdown-item" type="button">Profile</button>
                    </Link>
                    <Link to='/profile_edit'>
                        <button className="dropdown-item" type="button">Edit</button>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" type="button">Sign Out</button>
                </div>
                <Redirect to="/profile"/>
            </div>
        );
    }
}

export default AuthorizedUser;