import React from 'react';
import ShortInformationProfile from "./ShortInformationProfile";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from '../../../redux/actions/actionsProfileInformation'

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
        this.props.profileInformationActions.getUserLogin();
        this.props.profileInformationActions.getProfileInformation();
    }

    render() {
        const {login, name, surname, sex, email, dataOfRegistration} = this.props;
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)