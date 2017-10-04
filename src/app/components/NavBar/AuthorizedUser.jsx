import React from 'react';
import {Redirect} from 'react-router'

const styles = {
    container: {
        marginRight: "80px"
    }
};

class AuthorizedUser extends React.Component {
    render() {
        return (
            <div className="btn-group" style={styles.container}>
                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    User
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">Wall</button>
                    <button className="dropdown-item" type="button">Profile</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" type="button">Sign Out</button>
                </div>
                <Redirect  to="/profile"/>
            </div>
        );
    }
}

export default AuthorizedUser;