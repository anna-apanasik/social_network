import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
    buttonEdit: {
        marginLeft: "15px"
    }
};

class ShortInformationProfile extends React.Component {
    render() {
        const {login, name, surname, sex, email, dataOfRegistration} = this.props;
        return (
            <div>
                <h3>
                    {login}
                    <Link to='/profile_edit'>
                        <button className="btn badge badge-secondary" style={styles.buttonEdit}>
                            Edit
                        </button>
                    </Link>
                </h3>

                <ul className="list-group">
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Name: {name}</label></li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Surname: {surname}</label></li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Sex: {sex}</label>
                    </li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Email: {email}</label>
                    </li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Data of registration: {dataOfRegistration}</label>
                    </li>
                </ul>
            </div>
        )
    }
}

ShortInformationProfile.PropTypes = {
    login: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string.isRequired,
    sex: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    dataOfRegistration: React.PropTypes.data
};

export default ShortInformationProfile;
//style={styles.h3}