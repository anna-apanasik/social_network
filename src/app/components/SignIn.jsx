import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const styles = {
    container: {
        marginTop: "100px"
    },
    h4: {
        textAlign: "center"
    }
};

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signIn: false};
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-4 ">
                    <div className="card border-info mb-3">

                            <h4 className="card-title" style={styles.h4}>Sign in to Wall</h4>
                            <form>
                                <div className="form-group">
                                    <label>Email address or login</label>
                                    <input type="email"
                                           className="form-control form-control-sm"
                                           placeholder="Enter email or login"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password"
                                           className="form-control form-control-sm"
                                           placeholder="Enter password"/>
                                </div>
                                <button type="signIn" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>

                </div>
            </div>
        );
    }
}

export default SignIn;

/*<img className="card-img-top"  alt="Card image cap"/>*/


