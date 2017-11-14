import '../stylesForPages.less'
import React from 'react';
import OnePhoto from "app/components/Cloudinary/OnePhoto";
import {CLOUDINARY_UNKNOWN_USER_AVATAR} from "constants/cloudinaryConstants";
import {Link} from 'react-router-dom';

class OneUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            name: this.props.name,
            surname: this.props.surname,
            sex: this.props.sex,
            public_id: this.props.public_id,
            privateAccount: this.props.privateAccount
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            login: nextProps.login,
            name: nextProps.name,
            surname: nextProps.surname,
            sex: nextProps.sex,
            public_id: nextProps.public_id,
            privateAccount: nextProps.privateAccount
        })
    }

    render() {
        return (<div className="OneUser">
            <div className="card border-info mb-3">
                <div className="row">
                    <div className="photo col col-lg-3 ">
                        {this.state.public_id ?
                            <OnePhoto public_id={this.state.public_id} width={'100'} height={'100'}/> :
                            <OnePhoto public_id={CLOUDINARY_UNKNOWN_USER_AVATAR} width={'100'} height={'100'}/>
                        }
                    </div>
                    <div className="col col-lg-3 ">
                        <form className="form-group">
                            <Link to={`${this.state.login}`}><h4 className="card-title">{this.state.login}</h4></Link>
                            {this.state.privateAccount ? <p className="card-text">This account is private</p> :
                                <div><p className="card-text">Name:&nbsp;{this.state.name}</p>
                                    <p className="card-text">Surname:&nbsp;{this.state.surname}</p>
                                    <p className="card-text">Sex:&nbsp;{this.state.sex}</p></div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>)

    }
}

OneUser.PropTypes = {
    login: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    surname: React.PropTypes.string.isRequired,
    sex: React.PropTypes.string.isRequired,
    public_id: React.PropTypes.string.isRequired,
    privateAccount: React.PropTypes.boolean
};

export default OneUser;