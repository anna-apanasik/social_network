import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postActions from 'redux/actions/actionsPost'
import OnePost from "./OnePost";

const styles = {
    li: {
        listStyleType: 'none'
    }
};

class ListOfPosts extends React.Component {
    render() {
        const {listOfPosts, photos, createPost, deletePost} = this.props;
        let list;
        if (createPost || deletePost) {
            this.props.postActions.getPosts();
        }
        list = listOfPosts.map((item) =>
            <li style={styles.li}>
                <OnePost noteId={item.noteId}
                         title={item.title}
                         text={item.text}
                         photos={photos.map(elem => {
                             if (elem.noteId === item.noteId) {
                                 return elem;
                             }
                         })}
                />
            </li>);

        return (<div>{list}</div>)
    }
}

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