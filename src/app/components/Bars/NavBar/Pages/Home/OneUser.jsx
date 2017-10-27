import React from 'react';
import OnePhoto from "app/components/Cloudinary/OnePhoto";
import {CLOUDINARY_UNKNOWN_USER_AVATAR} from "constants/cloudinaryConstants";

const styles = {
    text: {
        marginLeft: "15px"
    },
    right: {
        //  marginLeft: "500px"
        textAlign: "center"
    },
    photos: {
        margin: "10px"
    }
};

class OneUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            name: this.props.name,
            surname: this.props.surname,
            sex: this.props.sex,
            public_id: this.props.public_id
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            login: nextProps.login,
            name: nextProps.name,
            surname: nextProps.surname,
            sex: nextProps.sex,
            public_id: nextProps.public_id
        })

    }

    render() {
        return (<div className="card border-info mb-3">
            <div className="row">
                <div className="col col-md-3 col-sm-3">
                    {this.state.public_id ? <OnePhoto public_id={this.state.public_id} width={'100'} height={'100'}/> :
                        <OnePhoto public_id={CLOUDINARY_UNKNOWN_USER_AVATAR} width={'100'} height={'1-0'}/>
                    }
                </div>
                <div className="col col-md-3 col-sm-3">
                    <form>
                        <div className="form-group" style={styles.text}>
                            <label className="card-title">{this.state.login}</label>
                            <label className="card-text">Name:&nbsp;{this.state.name}</label>
                            <label className="card-text">Surname:&nbsp;{this.state.surname}</label>
                            <label className="card-text">Sex:&nbsp;{this.state.sex}</label>
                        </div>
                    </form>
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
    public_id: React.PropTypes.string.isRequired
};

export default OneUser;