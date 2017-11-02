import {GET_LIST_OF_POSTS, CREATE_POST, DELETE_POST} from "constants/actionsConstants"
//TODO some problems with delete one post
import * as request from 'superagent';

export function addPost() {
    return (dispatch) => {
        dispatch({
            type: CREATE_POST
        })
    }
}

export function destroyPost() {
    return (dispatch) => {
        dispatch({
            type: DELETE_POST
        })
    }
}

export const getListOfPosts = (posts) => (dispatch) => {
    dispatch({
        type: GET_LIST_OF_POSTS,
        payload: posts
    })
};

export function createPost(data) {
    if (data.photos === '') {
        data.photos = [];
    }
    return (dispatch, getState) => {
        request
            .post('api/newpost')
            .send({
                userId: getState().reducerProfileInformation.userId,
                title: data.title,
                text: data.text,
                photos: data.photos.map(item => item.public_id)
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                dispatch(addPost());
            })
            .catch(e => {
                //TODO error in create( empty textarea field)
                console.log("errors in create note " + e);
            })
    }
}

export function deletePost(data) {
    return (dispatch) => {
        request
            .post('api/deletepost')
            .send({
                noteId: data.noteId
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                dispatch(destroyPost());
            })
            .catch(e => {
                //TODO error in delete
                console.log("errors in delete note " + e);
            })
    }
}

export function getPosts() {
    return (dispatch, getState) => {
        request
            .post('api/getposts')
            .send({
                userId: getState().reducerProfileInformation.userId
            })
            .accept('application/json')
            .withCredentials()
            .then(data => {
                dispatch(getListOfPosts(data.body));
            })
            .catch(e => {
                //TODO delete console.log
                //TODO error in get posts
                console.log("errors in find posts " + e);
            })
    }
}
