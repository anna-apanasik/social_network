import {
    GET_LOGIN,
    RECEIVE_INFORMATION,
    RECEIVE_ERROR,
    PROFILE_EDIT_SUCCESS,
    PROFILE_EDIT_FAILURE,
    RESET_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    RESET_STATUS_OF_POST,
    GET_LIST_OF_POSTS
} from "constants/actionsConstants";
import functions from './functionsForActions';

//TODO check all actions: don't need functions
const request = require('superagent');

export const getLogin = () => (dispatch, getState) => {
    let login = getState().reducerSignIn.login;
    dispatch({
        type: GET_LOGIN,
        payload: login
    })
};

export const receiveInformation = (information) => (dispatch) => {
    dispatch({
        type: RECEIVE_INFORMATION,
        payload: information
    })
};

export const receiveError = (error) => (dispatch) => {
    dispatch({
        type: RECEIVE_ERROR,
        payload: error
    })
};

export const successRequest = (user) => (dispatch) => {
    dispatch({
        type: PROFILE_EDIT_SUCCESS,
        payload: user
    })
};

export const failureRequest = (error) => (dispatch) => {
    dispatch({
        type: PROFILE_EDIT_FAILURE,
        payload: error
    })
};

export  function resetSuccess() {
    return (dispatch) => {
        dispatch({
            type: RESET_SUCCESS
        })
    }
}

export function openModal(){
    return (dispatch) => {
        dispatch({
            type: OPEN_MODAL
        })
    }
}

export function closeModal(){
    return (dispatch) => {
        dispatch({
            type: CLOSE_MODAL
        })
    }
}

export function resetStatusOfPost() {
    return (dispatch) => {
        dispatch({
            type: RESET_STATUS_OF_POST
        })
    }
}

export const getListOfPosts = (posts) => (dispatch) => {
    dispatch({
        type: GET_LIST_OF_POSTS,
        payload: posts
    })
};

export function getProfileInformation() {
    return (dispatch, getState) => {
        request
            .post('api/profile')
            .send({
                login: getState().reducerProfileInformation.login
            })
            .accept('application/json')
            .withCredentials()
            .then((user) => {
                dispatch(receiveInformation(user.body.user))
            })
            .catch(e => {
                //dispatch(receiveError(e));
                console.log('error get profile info' + e);
            })
    }
}

export function postRequestEditProfile(state) {
    return (dispatch) => {
        request
            .post('/api/update')
            .send({
                name: state.name,
                surname: state.surname,
                sex: state.sex,
                login: state.login,
                email: state.email,
                password: state.password,
                confirmPassword: state.confirmPassword
            })
            .accept('application/json')
            .withCredentials()
            .then(user => {
                dispatch(successRequest(user.body))
            })
            .catch(err => {
                console.log(err);
                dispatch(failureRequest(parseErrors(err)))
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
            .then(posts => {
                dispatch(getListOfPosts(posts.body));
            })
            .catch(e => {
                //TODO delete console.log
                //TODO error in get posts
                console.log("errors in find posts " + e);
            })
    }
}

function parseErrors(errors) {
    if (functions.isEmptyObject(errors.response.body.errors)) {
        return;
    }

    let error = functions.getObject(errors.response.body.errors, 'email');
    let sendError = [];

    if (error) {
        sendError.push(error.msg);
    } else {
        sendError.push('');
    }

    if (error = functions.getObject(errors.response.body.errors, 'password')) {
        sendError.push(error.msg);
    } else {
        sendError.push('');
    }

    if (error = functions.getObject(errors.response.body.errors, 'confirmPassword')) {
        sendError.push(error.msg);
    } else {
        sendError.push('');
    }

    return sendError;
}
