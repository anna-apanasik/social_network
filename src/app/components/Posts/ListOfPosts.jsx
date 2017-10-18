import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as profileInformationActions from 'redux/actions/actionsProfileInformation'
import OnePost from "./OnePost";

const styles = {
    li: {
        listStyleType: 'none'
    }
};

class ListOfPosts extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.userId !== this.props.userId || nextProps.createPost || this.props.createPost) {
            this.props.profileInformationActions.getPosts();
            if (nextProps.createPost) {
                this.props.profileInformationActions.resetStatusOfPost();
            }
        }
        if (nextProps.listOfPosts !== this.props.listOfPosts || this.props.createPost) {
            return true;
        }
    }

    render() {
        const {userId, listOfPosts} = this.props;
        const {getPosts} = this.props.profileInformationActions;
        let list = [];
        if (userId) {
            //TODO delete this console
            console.log(this.props.listOfPosts);
            list = listOfPosts.map((item) =>
                <li style={styles.li}>
                    <OnePost noteId={item.noteId}
                             title={item.title}
                             text={item.text}
                             getPosts={getPosts}/>
                </li>);
        }
        return (<div>
            {list}
        </div>)
    }

}

function mapStateToProps(state) {
    return {
        userId: state.reducerProfileInformation.userId,
        listOfPosts: state.reducerProfileInformation.listOfPosts,
        createPost: state.reducerProfileInformation.createPost
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileInformationActions: bindActionCreators(profileInformationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosts)