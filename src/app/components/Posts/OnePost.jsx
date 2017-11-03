import './stylesForPosts.less'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import * as actionsPost from 'redux/actions/actionsPost'
import NewPost from "../Posts/NewPost";
import OnePhoto from "../Cloudinary/OnePhoto";
import {Link} from 'react-router-dom';

class OnePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: this.props.noteId
        }
    }

    handleDeletePost(e) {
        e.preventDefault();
        this.props.actionsPost.deletePost(this.state);
    }

    handleEditPost(e) {
        e.preventDefault();
        //TODO delete console.log
        console.log('edit button');
        this.props.profileInformationActions.openModal()
    }

    buttons() {
        return ( <form className="buttons form-inline">
            <h5 className="card-title">{this.props.title}</h5>
            <button type="button" className="close" aria-label="Close"
                    onClick={this.handleEditPost.bind(this)}>
                <h6>Edit</h6>
            </button>
            <button type="button" className="close" aria-label="Close"
                    onClick={this.handleDeletePost.bind(this)}>
                <h5 aria-hidden="true">&times;</h5>
            </button>
        </form>)
    }

//TODO push buttons on the right side
    byLogin() {
        return (
            <form className="form-group">
                {this.props.homePage ?
                    <form className="form-inline">
                        <label className="form-text text-muted ">by&nbsp;</label>
                        <Link to={`${this.props.login}`}> <label
                            className="form-text"> {this.props.login}</label></Link>
                    </form> : null}
                <h4 className="card-title">{this.props.title}</h4>
            </form>
        )
    }

    render() {
        const {title, text, editPost, isOpen, photos, userPage} = this.props;
        const {closeModal} = this.props.profileInformationActions;
        return (<div className="OnePost">
            <div className="card border-info mb-3">
                {userPage ? this.byLogin() : this.buttons()}
                <p className="card-text">{text}</p>
                <form className="photos form-inline">
                    {photos.map(item =>
                        item ? <OnePhoto public_id={item.photo} width={'50'} height={'50'}/> : null
                    )}
                </form>

                <div>
                    <NewPost
                        isOpen={isOpen}
                        editPost={editPost}
                        closeModal={closeModal}
                        title={title}
                        text={text}/>
                </div>
            </div>
        </div>)
    }
}

//TODO check: need newPost or not
OnePost.PropTypes = {
    noteId: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    photos: React.PropTypes.string.isRequired,
    userPage: React.PropTypes.boolean,
    homePage: React.PropTypes.boolean
};

function mapStateToProps(state) {
    return {
        editPost: state.reducerProfileInformation.editPost,
        isOpen: state.reducerProfileInformation.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionsPost: bindActionCreators(actionsPost, dispatch),
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePost)
