import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as signUpActions from '../../../redux/actions/actionsSignUp'
import SignUp from "./SignUp";

class SignUpContainer extends React.Component {
    render() {
        const {name, surname, sex, login, email, password, errorLogin, errorEmail, errorPassword} = this.props;
        const {setName, setSurname, setSex, setLogin, setEmail, setPassword, postRequest} = this.props.signUpActions;
        return (
            <div>
                <SignUp name={name} surname={surname} sex={sex} login={login} email={email} password={password}
                        errorLogin={errorLogin} errorEmail={errorEmail} errorPassword={errorPassword}
                        setName={setName} setSurname={setSurname} setSex={setSex} setLogin={setLogin}
                        setEmail={setEmail} setPassword={setPassword} postRequest={postRequest}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.reducerSignUp.name,
        surname: state.reducerSignUp.surname,
        sex: state.reducerSignUp.sex,
        login: state.reducerSignUp.login,
        email: state.reducerSignUp.email,
        password: state.reducerSignUp.password,
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