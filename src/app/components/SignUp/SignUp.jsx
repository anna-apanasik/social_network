import React from 'react';
import FieldGroup from "./FieldGroup";
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import ProFilePhoto from "../Cloudinary/ProFilePhoto";

const styles = {
    form: {
        marginTop: "80px",
        width: "180px",
        height: "220px",
    },
    photo: {
        margin: "15px"
    }

};

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
            public_id: ''
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

    handleAddPhoto(e) {
        e.preventDefault();
        let res = [];
        cloudinary.openUploadWidget({cloud_name: 'anyablischik', upload_preset: 'ewtkco6g', tags: ['xmas']},
            function (error, result) {
                console.log(result[0]);
                res = result;
            });
        this.setState({public_id: res[0]})
        //this.props.getProfilePhoto(res[0])
        //TODO delete console.log
    }

    render() {
        const {errorLogin, errorEmail, errorPassword} = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
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
                    <div className="col-3">
                        <div className="card border-info mb-3" style={styles.form}>
                            <form>
                                <div className="form-group" style={styles.photo}>
                                    {this.state.public_id === '' ?
                                        <ProFilePhoto public_id={"avatar_unknownl_sw63nu"}/> :
                                        <ProFilePhoto public_id={this.state.public_id.public_id}/>}
                                    <div className="card-body">
                                        <button type="button"
                                                onClick={this.handleAddPhoto.bind(this)}
                                                className="btn btn-primary btn-sm">Add photo
                                        </button>
                                    </div>
                                </div>
                            </form>
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
    postRequest: React.PropTypes.func.isRequired,
    getProfilePhoto: React.PropTypes.func.isRequired
};
export default SignUp;

// {/*<img src={this.state.photo.url} />*/}
//    <h4 className="card-title">Card title</h4>