import React from 'react';
import FieldGroup from "./FieldGroup";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
    }

    handleNameChange(e) {
        this.props.setName(e.target.value)
    }

    handleSurnameChange(e) {
        this.props.setSurname(e.target.value);
    }

    handleLoginChange(e) {
        this.props.setLogin(e.target.value);
    }

    handleSexChange(e) {
        e.preventDefault();
        this.props.setSex(e.target.value);
    }

    handleEmailChange(e) {
        this.props.setEmail(e.target.value);
    }

    handlePasswordChange(e) {
        this.props.setPassword(e.target.value);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.postRequest(this.props)
    }

    render() {
        const {name, surname, sex, login, email, password, errorLogin, errorEmail, errorPassword} = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <br></br>
                        <div className="page-header">
                            <div className=" col-sm-12 col-md-12 ">
                                <h1>Create a new account </h1>
                            </div>
                        </div>

                        <form onSubmit={this.handleOnSubmit.bind(this)}>
                            <FieldGroup
                                label="First name"
                                value={name}
                                onChange={this.handleNameChange.bind(this)}
                                placeholder="Enter your first name"
                            />

                            <FieldGroup
                                label="Surname"
                                value={surname}
                                onChange={this.handleSurnameChange.bind(this)}
                                placeholder="Enter your surname"
                            />

                            <div className="col-sm-12 col-md-8">
                                <div className="btn-group"
                                     role="group">
                                    <input className="btn btn-secondary  btn-sm"
                                           value="Female"
                                           type="button"
                                           onClick={this.handleSexChange.bind(this)}/>
                                    <input className="btn btn-secondary  btn-sm"
                                           value="Male"
                                           type="button"
                                           onClick={this.handleSexChange.bind(this)}/>
                                    <label>{sex}</label>
                                </div>
                            </div>

                            <br></br>

                            <FieldGroup
                                label="Login"
                                value={login}
                                onChange={this.handleLoginChange.bind(this)}
                                placeholder="Enter your login"
                                errors={errorLogin}
                            />

                            <FieldGroup
                                label="Email address"
                                value={email}
                                onChange={this.handleEmailChange.bind(this)}
                                placeholder="Enter email"
                                errors={errorEmail}
                                help={"We'll never share your email with anyone else."}
                            />

                            <FieldGroup
                                label="Password"
                                type="password"
                                value={password}
                                onChange={this.handlePasswordChange.bind(this)}
                                placeholder="Password"
                                errors={errorPassword}
                                help={"Enter a combination of a least six numbers,\n" + "letter and punctuation marks (like ! and &)."}
                            />

                            <div className="col-sm-12 col-md-4">
                                <button type="submit" className="btn btn-primary btn-sm">Create Account</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string.isRequired,
    sex: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    errorEmail: React.PropTypes.string.isRequired,
    errorLogin: React.PropTypes.string.isRequired,
    errorPassword: React.PropTypes.string.isRequired,
    setName: React.PropTypes.func.isRequired,
    setSurname: React.PropTypes.func.isRequired,
    setSex: React.PropTypes.func.isRequired,
    setLogin: React.PropTypes.func.isRequired,
    setEmail: React.PropTypes.func.isRequired,
    setPassword: React.PropTypes.func.isRequired,
    postRequest: React.PropTypes.func.isRequired
};
export default SignUp;