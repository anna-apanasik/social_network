import '../stylesForPages.less'
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import {NOT_FOUND, FOUND_USERS_OR_POSTS} from "constants/actionsConstants";
import NotFound from "./Search/NotFound";
import SuccessFound from "./Search/SuccessFound";
import OnePost from "app/components/Posts/OnePost"

class HomePage extends React.Component {
    componentWillMount() {
        this.props.actionSearch.getPosts();
    }

    getLatestPosts() {
        if (this.props.latestPosts.length !== 0) {
            return this.props.latestPosts.map(item => {
                return (<li className="HomePage">
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
                </li>)
            });
        }
    }

    render() {
        const {search} = this.props;
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    {search === NOT_FOUND ? <NotFound/> : null}
                    {search === FOUND_USERS_OR_POSTS ? <SuccessFound/> : null}
                    {search === undefined ? <div>{this.getLatestPosts()}</div> : null}
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        search: state.reducerSearch.search,
        latestPosts: state.reducerSearch.latestPosts,
        photos: state.reducerSearch.photos,
        usersForPosts: state.reducerSearch.usersForPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)