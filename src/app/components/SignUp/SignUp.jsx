import React from 'react';
import FieldGroup from 'FieldGroup'
const request = require('superagent');

function getObject(array, searchValue) {
    let i = array.length;
    while (i--) {
        if (array[i].param == searchValue) {
            return array[i];
        }
    }
}

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
            errorLogin: '',
            errorEmail: '',
            errorPassword: '',
        };

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleSexChange=this.handleSexChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.parseErrors = this.parseErrors.bind(this);
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
        this.sendPostRequest();
    }

    sendPostRequest() {
        request
            .post('/api/registration')
            .send({
                name: this.state.name,
                surname: this.state.surname,
                login: this.state.login,
                email: this.state.email,
                password: this.state.password
            })
            .accept('application/json')
            .withCredentials()
            .then(res => {
                console.log('okay ' + res);
            })
            .catch(err => {
                this.parseErrors(err);
                this.setState({name: '', surname: '', login: '', email: '', password: ''});
            });
    }

    parseErrors(errors) {

        let error = getObject(errors.response.body.errors, 'login');
        if (error) {
            this.setState({errorLogin: error.msg});
        } else {
            this.setState({errorLogin: ''});
        }

        if (error = getObject(errors.response.body.errors, 'email')) {
            this.setState({errorEmail: error.msg});
        } else {
            this.setState({errorEmail: ''});
        }

        if (error = getObject(errors.response.body.errors, 'password')) {
            this.setState({errorPassword: error.msg});
        } else {
            this.setState({errorPassword: ''});
        }
    }

    render() {
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

                        <form onSubmit={this.handleOnSubmit}>
                            <FieldGroup
                                label="First name"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="Enter your first name"
                            />
                            <FieldGroup
                                label="Surname"
                                value={this.state.surname}
                                onChange={this.handleSurnameChange}
                                placeholder="Enter your surname"
                            />
                            <div className="col-sm-12 col-md-8">
                                <div className="btn-group"
                                     role="group">
                                        <input className="btn btn-secondary  btn-sm"
                                               value="Female"
                                               type="button"
                                               onSubmit = {this.handleSexChange}/>
                                        <input className="btn btn-secondary  btn-sm"
                                               value="Male"
                                               type="button"
                                               onSubmit = {this.handleSexChange}/>
                                    <label>{this.state.sex} </label>
                                </div>
                            </div>
                            <br></br>
                            <FieldGroup
                                label="Login"
                                value={this.state.login}
                                onChange={this.handleLoginChange}
                                placeholder="Enter your login"
                                errors={this.state.errorLogin}
                            />
                            <FieldGroup
                                label="Email address"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                placeholder="Enter email"
                                errors={this.state.errorEmail}
                                help={"We'll never share your email with anyone else."}
                            />
                            <FieldGroup
                                label="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                placeholder="Password"
                                errors={this.state.errorPassword}
                                help={"Enter a combination of a least six numbers,\n"+"letter and punctuation marks (like ! and &)."}
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

export default SignUp;
