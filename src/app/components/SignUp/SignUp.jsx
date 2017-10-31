import React from 'react';
import FieldGroup from "./FieldGroup";
import OnePhoto from "../Cloudinary/OnePhoto";
import {CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UNKNOWN_USER_AVATAR} from "constants/cloudinaryConstants";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            sex: '',
            login: '',
            email: '',
            password: '',
            public_id: '',
            isChecked: false
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

    handleOnCheckButton(e) {
        //  e.preventDefault();
        //TODO delete preventDefault
        this.setState({isChecked: !this.state.isChecked});
    }

    handleAddPhoto(e) {
        e.preventDefault();
        return new Promise((resolve, reject) =>
            cloudinary.openUploadWidget({
                    cloud_name: CLOUDINARY_NAME,
                    upload_preset: CLOUDINARY_UPLOAD_PRESET,
                    multiple: false,
                    tags: ['xmas']
                },
                (error, result) => {
                    if (result) {
                        resolve(result[0].public_id);
                    } else if (error) {
                        reject(error.message);
                    }
                }))
            .then(public_id => {
                this.setState({public_id: public_id})
            })
            .catch(e => {
                //TODO delete console.log
                console.log(e)
            })

    }

    render() {
        const {errorLogin, errorEmail, errorPassword} = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <br></br>
                        <div className="page-header">
                            <div className="col-sm-12 col-md-12 ">
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
                                label="Last name"
                                value={this.state.surname}
                                onChange={this.handleSurnameChange.bind(this)}
                                placeholder="Enter your last name"
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
                    <div className="col-3">
                        <div className="photo">
                            <div className="card border-info mb-3 ">
                                <form className="form">
                                    <div className="form-group">
                                        {this.state.public_id === '' ?
                                            <OnePhoto public_id={CLOUDINARY_UNKNOWN_USER_AVATAR}/> :
                                            <OnePhoto public_id={this.state.public_id}/>}

                                        <div className="card-body">
                                            <button type="button"
                                                    onClick={this.handleAddPhoto.bind(this)}
                                                    className="btn btn-primary btn-sm">Add photo
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="input-group">
                            <span className="input-group-addon">
                                <input type="checkbox" checked={this.state.isChecked}
                                       onChange={this.handleOnCheckButton.bind(this)}/>
                            </span>
                                <label type="text" className="form-control" aria-label="Text input with checkbox">Private
                                    account</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
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

// {/*<img src={this.state.photo.url} />*/}
//
//<h4 className="card-title">Card title</h4>
//TODO public_id