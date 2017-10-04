import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
    h3: {
        textAlign: "center",
        marginTop: "15px"
    },
    buttonEdit: {
        marginLeft: "15px"
    }
};

class ShortInformationProfile extends React.Component {
    render() {
        const {login} = this.props;
        return (
            <h3 style={styles.h3}>
                {login}
                <Link to='/profile_edit'><button className="btn badge badge-secondary" style={styles.buttonEdit}>
                    Edit
                </button></Link>
            </h3>)
    }
}

ShortInformationProfile.PropTypes={
    login: React.PropTypes.string.isRequired
};

export default ShortInformationProfile;
