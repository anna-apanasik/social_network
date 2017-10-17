import React from 'react';
import ShortInformationProfile from "./ShortInformationProfile";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import NewPost from "../Notes/NewPost";
import ListOfPosts from "../Notes/ListOfPosts";

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
        this.props.profileInformationActions.getLogin();
        this.props.profileInformationActions.getProfileInformation();
    }

    openModal(e) {
        e.preventDefault();
        this.props.profileInformationActions.openModal()
        //this.setState({isOpen: true})
    }

    render() {
        const {login, name, surname, sex, email, dataOfRegistration,isOpen} = this.props;
        const {closeModal} = this.props.profileInformationActions;
        return (
            <div>
                <div className="row" style={styles.h3}>
                    <div className="col col-3" style={styles.container}>
                        <ShortInformationProfile
                            login={login}
                            name={name}
                            surname={surname}
                            sex={sex}
                            email={email}
                            dataOfRegistration={dataOfRegistration}/>
                    </div>
                    <div className="col ool-6">
                        <ListOfPosts/>
                    </div>
                    <div className="col ool-3">
                        <div className=" col-sm-12 col-md-12 ">
                            <button type="button"
                                    className="btn btn-outline-primary btm-lg"
                                    onClick={this.openModal.bind(this)}>What's new?
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <NewPost
                        isOpen={isOpen}
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
        isOpen:state.reducerProfileInformation.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)