import {
    NOT_FOUND,
    FOUND_USERS_OR_POSTS,
    RESET_SEARCH,
    GET_LATEST_POSTS
} from "constants/actionsConstants";
import * as request from 'superagent';

export function notFound() {
    return (dispatch) => {
        dispatch({
            type: NOT_FOUND
        })
    }
}

export function foundUsersOrPosts(data) {
    return (dispatch) => {
        dispatch({
            type: FOUND_USERS_OR_POSTS,
            payload: data
        })
    }
}

export function resetSearch() {
    return (dispatch) => {
        dispatch({
            type: RESET_SEARCH
        })
    }
}

export function getLatestPosts(posts) {
    return (dispatch) => {
        dispatch({
            type: GET_LATEST_POSTS,
            payload: posts
        })
    }
}

export function search(search) {
    return (dispatch) => {
        request
            .post('api/search')
            .send({
                search: search
            })
            .accept('application/json')
            .withCredentials()
            .then(res => {
                if (res.body.users.length === 0 && res.body.posts.length === 0) {
                    dispatch(notFound());
                } else {
                    dispatch(foundUsersOrPosts(res.body))
                }
            })
            .catch(e => {
                //TODO delete console.log
                //TODO error in get posts
                console.log("errors in find posts " + e);
            })
    }
}

export function getPosts() {
    return (dispatch) => {
        request
            .post('api/home')
            .accept('application/json')
            .withCredentials()
            .then(res => {
                dispatch(getLatestPosts(res.body))

            })
            .catch(e => {
                //TODO delete console.log
                //TODO error in get posts
                console.log("errors in get posts " + e);
            })
    }
}

