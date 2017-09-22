import React from 'react';

function isEmptyObject(emptyObject) {
    return JSON.stringify(emptyObject) === '{}';
}

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
            email: '',
            password: '',
            errorEmail: '',
            errorPassword: '',
        };
        //this.setState( {validationErrors : props});
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleOnSubmit(e) {
        e.preventDefault();
        /// TODO send to server
        this.setState({name: '', email: ''});
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <div className="page-header">
                    <div className=" col-sm-12 col-md-12 ">
                        <h1>Create a new account </h1>
                    </div>
                </div>

                <form>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-4">
                            <label>First name</label>
                            <input type="text"
                                   className="form-control form-control-sm"
                                   value={this.state.name}
                                   onChange={this.handleNameChange}
                                   placeholder="Enter your first name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-4">
                            <label>Surname</label>
                            <input type="text"
                                   className="form-control form-control-sm"
                                   placeholder="Enter your surname"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-4 ">
                            <label>Login</label>
                            <input type="text" className="form-control form-control-sm" id="inputLogin"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter your login"/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="btn-group" data-toggle="buttons">

                            <label className="btn btn-secondary  btn-sm">
                                <input type="radio"/> Female
                            </label>
                            <label className="btn btn-secondary  btn-sm">
                                <input type="radio"/> Male
                            </label>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-4">
                            <label>Email address</label>
                            <input type="email"
                                   className="form-control form-control-sm"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}
                                   placeholder="Enter email"/>
                            <small className="form-text text-muted">We'll never share your email with anyone else.
                            </small>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 col-md-4">
                            <label>Password</label>
                            <input type="password"
                                   className="form-control form-control-sm"
                                   value={this.state.password}
                                   onChange={this.handlePasswordChange}
                                   placeholder="Password"/>
                            <small className="form-text text-muted">Enter a combination of a least six numbers, letter
                                and punctuation marks (like ! and &).
                            </small>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <button type="submit" className="btn btn-primary btn-sm">Create Account</button>
                    </div>
                </form>
            </div>
        );
    }
}

SignUp.PropTypes = {
    validationErrors: React.PropTypes.array
};

export default SignUp;