import './stylesForButtons.less'
import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsSignIn from 'redux/actions/actionsSignIn';

class AuthorizedUser extends React.Component {
    handleClickSignOut(e) {
        e.preventDefault();
        this.props.actionsSignIn.signOut();
    }
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
                    <div className="dropdown-divider"/>
                    <button className="dropdown-item" type="button" onClick={this.handleClickSignOut.bind(this)}>Sign
                        Out
                    </button>
                </div>
                <Redirect to="/profile"/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionsSignIn: bindActionCreators(actionsSignIn, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AuthorizedUser);