import './stylesForProfile.less'
import React from 'react';
import ShortInformationProfile from "./ShortInformationProfile";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import {CLOUDINARY_UNKNOWN_USER_AVATAR} from "constants/cloudinaryConstants";
import ListOfPosts from 'app/components/Posts/ListOfPosts'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.match.params.login
        };
    }

    componentWillMount() {
        this.props.profileInformationActions.getProfileInformation(this.state.login);
    }

    render() {
        const {login, name, surname, sex, dataOfRegistration, public_id, privateAccount} = this.props;
        if (privateAccount) {
            return (
                <div className="UserProfilePrivateAccount">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <h2 className="display-3">This account is private</h2>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="UserProfilePublicAccount">
                    <div className="row">
                        <div className="col col-md-3 col-sm-3">
                            <ShortInformationProfile
                                userPage={true}
                                login={login}
                                name={name}
                                surname={surname}
                                sex={sex}
                                public_id={public_id || CLOUDINARY_UNKNOWN_USER_AVATAR}
                                dataOfRegistration={dataOfRegistration}
                                privateAccount={privateAccount}/>
                        </div>
                        <div className="col ool-md-6 col-sm-6">
                            <ListOfPosts userPage={true}/>
                        </div>
                        <div className="col ool-md-1 col-sm-1">
                        </div>
                    </div>
                </div>)
        }
    }
}

function mapStateToProps(state) {
    return {
        login: state.reducerProfileInformation.login,
        name: state.reducerProfileInformation.name,
        surname: state.reducerProfileInformation.surname,
        sex: state.reducerProfileInformation.sex,
        dataOfRegistration: state.reducerProfileInformation.dataOfRegistration,
        public_id: state.reducerProfileInformation.public_id,
        privateAccount: state.reducerProfileInformation.privateAccount,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
