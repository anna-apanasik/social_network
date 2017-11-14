import './stylesForProfile.less'
import React from 'react';
import ShortInformationProfile from "./ShortInformationProfile";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import NewPost from "../Posts/NewPost";
import ListOfPosts from "../Posts/ListOfPosts";
import {CLOUDINARY_UNKNOWN_USER_AVATAR} from "constants/cloudinaryConstants";
import {parseDate} from "./profileHelper";

class ProfileContainer extends React.Component {
    componentWillMount() {
        this.props.profileInformationActions.getProfileInformation(undefined);
    }

    openModal(e) {
        e.preventDefault();
        this.props.profileInformationActions.openModal()
    }


    render() {
        const {login, name, surname, sex, email, dataOfRegistration, public_id, isOpen, editPost, privateAccount} = this.props;
        const {closeModal} = this.props.profileInformationActions;
        let formatDate = parseDate(dataOfRegistration);
        return (
            <div>
                <div className="ProfileContainer row">
                    <div className="col col-lg-3 col-md-3 col-sm-6 col-10">
                        <ShortInformationProfile
                            login={login}
                            name={name}
                            surname={surname}
                            sex={sex}
                            email={email}
                            public_id={public_id || CLOUDINARY_UNKNOWN_USER_AVATAR}
                            dataOfRegistration={formatDate}
                            privateAccount={privateAccount}/>
                    </div>
                    <div className="ListOfPosts col col-lg-6 col-md-6 col-sm-6 col-10">
                        <ListOfPosts/>
                    </div>
                    <div className="WhatsNew col col-lg-1 col-md-1 col-sm-12 col-10">
                        <button type="button "
                                className="btn btn-outline-primary btm-lg"
                                onClick={this.openModal.bind(this)}>What's new?
                        </button>

                    </div>
                </div>
                <div>
                    <NewPost
                        isOpen={isOpen}
                        editPost={editPost}
                        closeModal={closeModal}/>
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
        dataOfRegistration: state.reducerProfileInformation.dataOfRegistration,
        public_id: state.reducerProfileInformation.public_id,
        privateAccount: state.reducerProfileInformation.privateAccount,
        editPost: state.reducerProfileInformation.editPost,
        isOpen: state.reducerProfileInformation.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)