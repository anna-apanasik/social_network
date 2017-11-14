import './stylesForProfile.less'
import React from 'react';
import {connect} from 'react-redux'
import FieldGroup from '../SignUp/FieldGroup'
import {bindActionCreators} from 'redux'
import {Redirect} from 'react-router'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import OnePhoto from "../Cloudinary/OnePhoto";
import {CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UNKNOWN_USER_AVATAR} from 'constants/cloudinaryConstants'

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.props.profileInformationActions.getProfileInformation(undefined);
        this.state = {
            name: this.props.name,
            surname: this.props.surname,
            login: this.props.login,
            email: this.props.email,
            sex: this.props.sex,
            password: this.props.password,
            confirmPassword: this.props.confirmPassword,
            public_id: this.props.public_id,
            privateAccount: this.props.privateAccount
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.name,
            surname: nextProps.surname,
            login: nextProps.login,
            email: nextProps.email,
            sex: nextProps.sex,
            password: nextProps.password,
            confirmPassword: nextProps.confirmPassword,
            public_id: nextProps.public_id,
            privateAccount: nextProps.privateAccount
        })

    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleSurnameChange(e) {
        this.setState({surname: e.target.value});
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

    handleConfirmPasswordChange(e) {
        this.setState({confirmPassword: e.target.value});
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.profileInformationActions.postRequestEditProfile(this.state)
    }

    handleEditPhoto(e) {
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
                //TODO delete console.log (write error: bad internet connection)
                console.log(e)
            })

    }

    handleOnCheckButton() {
        this.setState({privateAccount: !this.state.privateAccount});
    }

    render() {
        const {errorEmail, errorPassword, errorConfirmPassword, success} = this.props;
        if (success) {
            this.props.profileInformationActions.resetSuccess();
            return ( <Redirect to="/profile"/>)
        }
        return (
            <div className="ProfileEdit container">
                <div className="page-header">
                    <div className=" col-sm-12 col-md-12 ">
                        <h1>Edit profile</h1>
                    </div>
                </div>
                <br/>
                <div className="card border-info mb-3">
                    <div className="row justify-content-center">
                        <div className="col-3 col-md-3 col-sm-6 col-xs-12">
                            <form>
                                <div className="photo form-group">
                                    {this.state.public_id === '' ?
                                        <OnePhoto public_id={CLOUDINARY_UNKNOWN_USER_AVATAR}/> :
                                        <OnePhoto public_id={this.state.public_id}/>}

                                    <div className="card-body">
                                        <button type="button"
                                                onClick={this.handleEditPhoto.bind(this)}
                                                className="btn btn-primary btn-sm">Edit photo
                                        </button>
                                    </div>
                                </div>

                                <div className="PrivateAccount input-group">
                                    <span className="input-group-addon">
                                     <input type="checkbox" checked={this.state.privateAccount}
                                            onChange={this.handleOnCheckButton.bind(this)}/>
                                    </span>
                                    <label type="text" className="form-control"
                                           aria-label="Text input with checkbox">Private
                                        account</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-3 col-md-3 col-sm-6 col-xs-12">
                            <form>
                                <FieldGroup
                                    label="First name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange.bind(this)}
                                    placeholder="Enter your first name"/>

                                <FieldGroup
                                    label="Last name"
                                    value={this.state.surname}
                                    onChange={this.handleSurnameChange.bind(this)}
                                    placeholder="Enter your last name"/>

                                <div className="col-sm-12 col-md-8">
                                    <div className="btn-group"
                                         role="group">
                                        <input className="btn btn-secondary  btn-sm "
                                               value="Female"
                                               type="button"
                                               onClick={this.handleSexChange.bind(this)}/>

                                        <input className="btn btn-secondary  btn-sm"
                                               value="Male"
                                               type="button"
                                               onClick={this.handleSexChange.bind(this)}/>
                                    </div>
                                    <label className="Sex">Your sex: {this.state.sex}</label>
                                </div>
                            </form>
                        </div>

                        <br/>

                        <div className="col-3 col-md-3 col-sm-6 col-xs-12">
                            <form>
                                <div className="form-group">
                                    <div className="col-sm-12 col-md-12">
                                        <label>Login</label>
                                        <form className="form-inline">
                                            <input type="text"
                                                   readOnly className="form-control form-control-sm"
                                                   value={this.state.login}/>
                                        </form>
                                    </div>
                                </div>

                                <FieldGroup
                                    label="Email address"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange.bind(this)}
                                    placeholder="Enter email"
                                    requiredParam={true}
                                    errors={errorEmail}
                                    help={"We'll never share your email with anyone else."}/>
                            </form>
                        </div>

                        <div className="col-3  col-md-3 col-sm-6 col-xs-12">
                            <form>
                                <FieldGroup
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange.bind(this)}
                                    placeholder="Password"
                                    requiredParam={true}
                                    errors={errorPassword}/>

                                <FieldGroup
                                    label="Confirm password"
                                    type="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleConfirmPasswordChange.bind(this)}
                                    placeholder="Confirm password"
                                    requiredParam={true}
                                    errors={errorConfirmPassword}
                                    help={"Enter a combination of a least six numbers,\n" + "letter and punctuation marks (like ! and &)."}/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="SaveButton col-sm-12 col-md-12 ">
                    <button type="button"
                            className="btn btn-primary btm-lg"
                            onClick={this.handleOnSubmit.bind(this)}>Save
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.reducerProfileInformation.login,
        name: state.reducerProfileInformation.name,
        surname: state.reducerProfileInformation.surname,
        sex: state.reducerProfileInformation.sex,
        email: state.reducerProfileInformation.email,
        password: state.reducerProfileInformation.password,
        confirmPassword: state.reducerProfileInformation.password,
        errorEmail: state.reducerProfileInformation.errorEmail,
        errorPassword: state.reducerProfileInformation.errorPassword,
        errorConfirmPassword: state.reducerProfileInformation.errorConfirmPassword,
        success: state.reducerProfileInformation.success,
        public_id: state.reducerProfileInformation.public_id,
        privateAccount: state.reducerProfileInformation.privateAccount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)

