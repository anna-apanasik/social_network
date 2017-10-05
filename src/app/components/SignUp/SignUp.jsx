import React from 'react';
import FieldGroup from "./FieldGroup";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            sex:'',
            login: '',
            email: '',
            password: '',
        };
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleSurnameChange(e) {
        this.setState({surname: e.target.value});
    }

    handleLoginChange(e) {
        this.setState({login: e.target.value});
    }

    handleSexChange(e) {
        e.preventDefault();
        this.setState({sex: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.postRequest(this.state)
    }

    render() {
        const {errorLogin, errorEmail, errorPassword} = this.props;
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
                                value={this.state.name}
                                onChange={this.handleNameChange.bind(this)}
                                placeholder="Enter your first name"
                            />

                            <FieldGroup
                                label="Surname"
                                value={this.state.surname}
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
                                </div>
                            </div>

                            <br></br>

                            <FieldGroup
                                label="Login"
                                value={this.state.login}
                                onChange={this.handleLoginChange.bind(this)}
                                placeholder="Enter your login"
                                requiredParam={true}
                                errors={errorLogin}
                            />

                            <FieldGroup
                                label="Email address"
                                value={this.state.email}
                                onChange={this.handleEmailChange.bind(this)}
                                placeholder="Enter email"
                                requiredParam={true}
                                errors={errorEmail}
                                help={"We'll never share your email with anyone else."}
                            />

                            <FieldGroup
                                label="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange.bind(this)}
                                placeholder="Password"
                                requiredParam={true}
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
    errorEmail: React.PropTypes.string.isRequired,
    errorLogin: React.PropTypes.string.isRequired,
    errorPassword: React.PropTypes.string.isRequired,
    postRequest: React.PropTypes.func.isRequired
};
export default SignUp;