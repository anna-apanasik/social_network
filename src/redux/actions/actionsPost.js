import {
    GET_LIST_OF_POSTS,
    CREATE_POST,
    DELETE_POST,
    EDIT_POST_DATA,
    RESET_EDIT_POST_DATA,
    EDIT_POST_FLAG
} from "constants/actionsConstants"
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

export function updatePostAction() {
    return (dispatch) => {
        dispatch({
            type: EDIT_POST_FLAG
        })
    }
}

export function editPostData(data) {
    return (dispatch) => {
        dispatch({
            type: EDIT_POST_DATA,
            payload: data
        })
    }
}

export function resetEditPostData() {
    return (dispatch) => {
        dispatch({
            type: RESET_EDIT_POST_DATA
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
            .catch(() => {
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
            .catch(() => {
            })
    }
}

export function updatePost(data) {
    return (dispatch) => {
        request
            .post('api/editpost')
            .send({
                noteId: data.postId,
                title: data.title,
                text: data.text,
                photos: data.photos.length !== 0 ? data.photos.map(item => item.public_id) : ''
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                dispatch(updatePostAction());
            })
            .catch(() => {
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
            })
    }
}
