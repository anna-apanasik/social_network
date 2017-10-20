import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as signUpActions from 'redux/actions/actionsSignUp'
import SignUp from "./SignUp";
import {Redirect} from 'react-router'

class SignUpContainer extends React.Component {
    render() {
        const {errorLogin, errorEmail, errorPassword, success} = this.props;
        const {postRequest, getProfilePhoto} = this.props.signUpActions;

        if (success) {
            return ( <Redirect from="/signup" to="/success_sign_up"/>)
        } else
            return (
                <div>
                    <SignUp
                        errorLogin={errorLogin}
                        errorEmail={errorEmail}
                        errorPassword={errorPassword}
                        postRequest={postRequest}
                        getProfilePhoto={getProfilePhoto}
                    />
                </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        errorLogin: state.reducerSignUp.errorLogin,
        errorEmail: state.reducerSignUp.errorEmail,
        errorPassword: state.reducerSignUp.errorPassword,
        success: state.reducerSignUp.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpActions: bindActionCreators(signUpActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)
