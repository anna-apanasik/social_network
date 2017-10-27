import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import OnePhoto from 'app/components/Cloudinary/OnePhoto'

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

class OnePostSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: this.props.noteId,
            userId: this.props.userId
        }
    }

    componentWillMount() {
        this.props.actionSearch.getLogin(this.state.userId);
        this.props.actionSearch.getPhotos(this.state.noteId);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            noteId: nextProps.noteId,
            userId: nextProps.userId
        })

    }

    render() {
        const {title, text, login, photos} = this.props;
        return (<div className="card border-info mb-3">
            <form className="form-group" style={styles.text}>
                <form className="form-inline">
                    <label className="form-text text-muted ">by&nbsp;</label>
                    <label className="form-text"> {login}</label>
                </form>
                <h4 className="card-title">{title}</h4>
            </form>
            <p className="card-text" style={styles.text}>{text}</p>
            <form className="form-inline" style={styles.photos}>
                {photos.map(item =>
                    item ? <OnePhoto public_id={item.photo} width={'50'} height={'50'}/> : null
                )}
            </form>
        </div>)
    }
}

OnePostSearch.PropTypes = {
    noteId: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        login: state.reducerSearch.login,
        photos: state.reducerSearch.photos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePostSearch);
// {photos.map(item =>
//item ? <OnePhoto public_id={item.photo} width={'50'} height={'50'}/> : null
//)}