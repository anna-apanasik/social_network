import {
    RECEIVE_INFORMATION,
    RECEIVE_ERROR,
    PROFILE_EDIT_SUCCESS,
    PROFILE_EDIT_FAILURE,
    RESET_SUCCESS,
    EDIT_POST,
    OPEN_MODAL,
    CLOSE_MODAL
} from "constants/actionsConstants";
import functions from './functionsForActions';
import {getPosts} from "./actionsPost";
import * as request from 'superagent';

//TODO check all actions: don't need functions


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

export function resetSuccess() {
    return (dispatch) => {
        dispatch({
            type: RESET_SUCCESS
        })
    }
}

export function openModal() {
    return (dispatch) => {
        dispatch({
            type: OPEN_MODAL
        })
    }
}

export function closeModal() {
    return (dispatch) => {
        dispatch({
            type: CLOSE_MODAL
        })
    }
}

export function editPostAndOpenModal() {
    return (dispatch) => {
        dispatch({
            type: EDIT_POST
        })
    }
}
export function getProfileInformation(login) {
    return (dispatch, getState) => {
        request
            .post('api/profile')
            .send({
                login: login === undefined ? getState().reducerSignIn.login : login
            })
            .accept('application/json')
            .withCredentials()
            .then((user) => {
                dispatch(receiveInformation(user.body.user));
                dispatch(getPosts())
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
                confirmPassword: state.confirmPassword,
                privateAccount: state.privateAccount,
                public_id: state.public_id
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
