import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionSearch from 'redux/actions/actionSearch';
import {NOT_FOUND, FOUND_USERS_OR_POSTS} from "constants/actionsConstants";
import NotFound from "./Search/NotFound";
import SuccessFound from "./Search/SuccessFound";
import OnePostSearch from "./OnePostSearch";

const styles = {
    li: {
        listStyleType: 'none'
    }
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.props.actionSearch.getPosts();
    }

    render() {
        const {search, latestPosts} = this.props;
        let posts = [];
        if (latestPosts.length !== 0) {
            console.log('latestPosts')
            console.log(latestPosts)
            posts = latestPosts.map(item => {
                return (<li style={styles.li}>
                    <OnePostSearch
                        userId={item.userId}
                        noteId={item.noteId}
                        title={item.title}
                        text={item.text}/>
                </li>)
            });
            console.log('posts')
            console.log(posts)
        }
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    {search === NOT_FOUND ? <NotFound/> : null}
                    {search === FOUND_USERS_OR_POSTS ? <SuccessFound/> : null}
                    {search === undefined ? <div>{posts}</div> : null}
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        search: state.reducerSearch.search,
        latestPosts: state.reducerSearch.latestPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionSearch: bindActionCreators(actionSearch, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)