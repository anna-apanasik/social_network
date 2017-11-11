import './stylesForPosts.less'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postActions from 'redux/actions/actionsPost'
import OnePost from "./OnePost";

class ListOfPosts extends React.Component {
    getListOfPosts() {
        return this.props.listOfPosts.map((item) =>
            <li>
                <OnePost noteId={item.noteId}
                         userPage={this.props.userPage || false}
                         title={item.title}
                         text={item.text}
                         photos={this.props.photos.map(elem => {
                             if (elem.noteId === item.noteId) {
                                 return elem;
                             }
                         })}/>
            </li>);
    }

    render() {
        const {createPost, deletePost} = this.props;
        if (createPost || deletePost) {
            this.props.postActions.getPosts();
        }
        return (<div className="ListOfPosts">{this.getListOfPosts()}</div>)
    }
}

ListOfPosts.PropTypes = {
    userPage: React.PropTypes.boolean
};

function mapStateToProps(state) {
    return {
        listOfPosts: state.reducerPost.listOfPosts,
        photos: state.reducerPost.photos,
        createPost: state.reducerPost.createPost,
        deletePost: state.reducerPost.deletePost
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosts)