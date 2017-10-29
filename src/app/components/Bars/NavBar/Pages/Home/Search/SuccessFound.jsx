import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import OneUser from "../OneUser";
import OnePostSearch from "../OnePostSearch";

const styles = {
    li: {
        listStyleType: 'none'
    }
};


class SuccessFound extends React.Component {
    render() {
        const {users, posts} = this.props;
        let listUsers, listPosts;

        listUsers = users.map(item => <li style={styles.li}>
            <OneUser login={item.login}
                     public_id={item.public_id}
                     name={item.name}
                     surname={item.surname}
                     sex={item.sex}/>
        </li>);

        listPosts = posts.map(item => <li style={styles.li}>
            <OnePostSearch userId={item.userId}
                           noteId={item.noteId}
                           title={item.title}
                           text={item.text}/>
        </li>);
        return (<div>
            <div>{listUsers}</div>
            <div>{listPosts}</div>
        </div>)
    }
}

//TODO for each post author and link
function mapStateToProps(state) {
    return {
        users: state.reducerSearch.users,
        posts: state.reducerSearch.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessFound);

//    <div>{listPosts}</div>