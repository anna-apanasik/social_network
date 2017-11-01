import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import OneUser from "../OneUser";
import OnePost from "app/components/Posts/OnePost"

const styles = {
    li: {
        listStyleType: 'none'
    }
};

//TODO style for li (maybe in all app this style?)
class SuccessFound extends React.Component {
    getLisOfUsers() {
        return this.props.users.map(item => <li style={styles.li}>
            <OneUser login={item.login}
                     public_id={item.public_id}
                     name={item.name}
                     surname={item.surname}
                     sex={item.sex}
                     privateAccount={item.privateAccount}/>
        </li>);
    }

    getListOfPosts() {
        return this.props.posts.map(item => <li style={styles.li}>
            <OnePost noteId={item.noteId}
                     userPage={true}
                     homePage={true}
                     title={item.title}
                     text={item.text}
                     photos={this.props.photos.map(elem => {
                         if (elem.noteId === item.noteId) {
                             return elem;
                         }
                     })}
                     login={this.props.usersForPosts.filter(elem => {
                         if (elem.userId === item.userId) {
                             return true;
                         }
                     })[0].login}/>
        </li>);
    }

    render() {
        return (<div>
            <div>{this.getLisOfUsers()}</div>
            <div>{this.getListOfPosts()}</div>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        users: state.reducerSearch.users,
        posts: state.reducerSearch.posts,
        photos: state.reducerSearch.photos,
        usersForPosts: state.reducerSearch.usersForPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessFound);