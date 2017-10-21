import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import * as actionsPost from 'redux/actions/actionsPost'
import NewPost from "../Posts/NewPost";

const styles = {
    text: {
        marginLeft: "15px"
    },
    buttonDelete: {
        textAlign: "right"
    }
};

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

    render() {
        const {title, text, editPost, isOpen} = this.props;
        const {closeModal} = this.props.profileInformationActions;
        return (<div className="card border-info mb-3">
                <form className="form-inline">
                    <h5 className="card-title" style={styles.text}>{title}</h5>
                    <button type="button" className="close" aria-label="Close"
                            onClick={this.handleEditPost.bind(this)}
                            style={styles.buttonDelete}>
                        <h5>Edit</h5>
                    </button>
                    <button type="button" className="close" aria-label="Close"
                            style={styles.buttonDelete}
                            onClick={this.handleDeletePost.bind(this)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </form>
                <p className="card-text" style={styles.text}>{text}</p>
                <form className="form-inline">
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

        )
    }
}

OnePost.PropTypes = {
    noteId: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
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