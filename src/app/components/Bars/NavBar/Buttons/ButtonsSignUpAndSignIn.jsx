import './stylesForButtons.less'
import React from 'react';
import {Link} from 'react-router-dom';

class ButtonsSignUpAndSignIn extends React.Component {
    render() {
        return (
            <form className="ButtonsSignUpAndSignIn form-inline my-2 my-lg-0">
                <Link to='/sign_in'>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"> Sign in</button>
                </Link>
                <Link to='/sign_up'>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"> Sign up</button>
                </Link>
            </form>
        );
    }
}

export default ButtonsSignUpAndSignIn;