import './stylesForProfile.less'
import React from 'react';
import {Link} from 'react-router-dom';
import ProFilePhoto from "../Cloudinary/OnePhoto";

class ShortInformationProfile extends React.Component {
    render() {
        const {login, name, surname, sex, email, dataOfRegistration, privateAccount, public_id} = this.props;
        const {userPage} = this.props || false;
        return (
            <div className="ShortInformationProfile">
                <h3>
                    {login}
                    {userPage ? null : <Link to='/profile_edit'>
                        <button className="btn badge badge-secondary">
                            Edit
                        </button>
                    </Link>}

                </h3>

                <ul className="list-group">
                    <li className="profile-photo list-group-item list-group-item-secondary font-weight-bold">
                        <ProFilePhoto public_id={public_id}/>
                    </li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Name: {name}</label></li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Last name: {surname}</label></li>
                    <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Sex: {sex}</label>
                    </li>
                    {userPage ? null : <li className="list-group-item list-group-item-secondary font-weight-bold">
                        <label>Email: {email}</label>
                    </li>}
                    {userPage ?
                        <li className="list-group-item list-group-item-secondary font-weight-bold"><label>This account
                            is public</label></li> :
                        <li className="list-group-item list-group-item-secondary font-weight-bold">
                            {privateAccount ? <label>Your account is private</label> :
                                <label>Your account is public</label>}
                        </li>}
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
    dataOfRegistration: React.PropTypes.data,
    public_id: React.PropTypes.string.isRequired,
    privateAccount: React.PropTypes.boolean,
    userPage: React.PropTypes.boolean
};

export default ShortInformationProfile;