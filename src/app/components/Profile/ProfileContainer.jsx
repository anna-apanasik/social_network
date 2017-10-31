import React from 'react';
import ShortInformationProfile from "./ShortInformationProfile";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import NewPost from "../Posts/NewPost";
import ListOfPosts from "../Posts/ListOfPosts";
//import {savePost} from "../../../redux/actions/actionsProfileInformation";

const styles = {
    container: {
        marginLeft: "50px"
    },
    h3: {
        marginTop: "15px"
    }
};


class ProfileContainer extends React.Component {

    componentWillMount() {
        //   this.props.profileInformationActions.getLogin();
        this.props.profileInformationActions.getProfileInformation();
    }

    openModal(e) {
        e.preventDefault();
        this.props.profileInformationActions.openModal()
    }

    render() {
        const {login, name, surname, sex, email, dataOfRegistration, public_id, isOpen, editPost, privateAccount} = this.props;
        const {closeModal} = this.props.profileInformationActions;
        return (
            <div>
                <div className="row" style={styles.h3}>
                    <div className="col col-md-3 col-sm-3" style={styles.container}>
                        <ShortInformationProfile
                            login={login}
                            name={name}
                            surname={surname}
                            sex={sex}
                            email={email}
                            public_id={public_id}
                            dataOfRegistration={dataOfRegistration}
                            privateAccount={privateAccount}/>
                    </div>
                    <div className="col ool-md-6 col-sm-6">
                        <ListOfPosts/>
                    </div>
                    <div className="col ool-md-1 col-sm-1">
                        <button type="button"
                                className="btn btn-outline-primary btm-lg"
                                onClick={this.openModal.bind(this)}>What's new?
                        </button>

                    </div>
                </div>
                <div>
                    <NewPost
                        isOpen={isOpen}
                        editPost={editPost}
                        title={''}
                        text={''}
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
        //  editPost: state.reducerProfileInformation.editPost,
        isOpen: state.reducerProfileInformation.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)