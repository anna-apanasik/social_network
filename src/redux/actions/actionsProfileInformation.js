import {
    GET_LOGIN,
    RECEIVE_INFORMATION,
    RECEIVE_ERROR,
    PROFILE_EDIT_SUCCESS,
    PROFILE_EDIT_FAILURE
} from "../../constants/actionsConstants";
import functions from './functionsForActions'

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
export const failureRequest = (error) => (dispatch) => {
    dispatch({
        type: PROFILE_EDIT_FAILURE,
        payload: error
    })
};

export function getUserLogin() {
    return (dispatch) => (dispatch(getLogin()))
}

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
            .then(() => {

                // dispatch(successRequest())
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
