import React from 'react';
import ShortInformationProfile from "./ShortInformationProfile";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from '../../../redux/actions/actionsProfileInformation'

class ProfileContainer extends React.Component {
    render() {
        const {login} = this.props;
        this.props.profileInformationActions.getProfileInformation(login);
        return (<ShortInformationProfile login={login}/>)
    }
}

function mapStateToProps(state) {
    return {
        login: state.reducerProfileInformation.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)