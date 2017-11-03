import './stylesSignIn.less'
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import * as signInActions from 'redux/actions/actionsSignIn';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: ''
        };
    }

    handleLoginChange(e) {
        this.setState({login: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleClickSignIn(e) {
        e.preventDefault();
        this.props.signInActions.postRequest(this.state)
    }

    render() {
        const {errorLogin, errorPassword, success} = this.props;
        if (success) {
            return ( <Redirect from="/sign_in" to="/profile"/>)
        } else
            return (
                <div className="SignIn row justify-content-center">
                    <div className="col-10 col-sm-6 col-md-6 col-lg-3">
                        <div className="card border-info mb-3">
                            <h4 className="card-title">Sign in to Wall</h4>
                            <form>
                                <div className="form-group">
                                    <label>Login</label>
                                    <input type="email"
                                           value={this.state.login}
                                           onChange={this.handleLoginChange.bind(this)}
                                           className="form-control form-control-sm"
                                           placeholder="Enter login"/>
                                    <span className="badge badge-danger">{errorLogin}</span>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                           value={this.state.password}
                                           onChange={this.handlePasswordChange.bind(this)}
                                           className="form-control form-control-sm"
                                           placeholder="Enter password"/>
                                    <span className="badge badge-danger">{errorPassword}</span>
                                </div>

                                <button type="signIn"
                                        className="btn btn-primary"
                                        onClick={this.handleClickSignIn.bind(this)}
                                >Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        errorLogin: state.reducerSignIn.errorLogin,
        errorPassword: state.reducerSignIn.errorPassword,
        success: state.reducerSignIn.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInActions: bindActionCreators(signInActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


