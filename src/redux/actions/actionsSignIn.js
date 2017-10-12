import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from "constants/actionsConstants";
import functions from './functionsForActions'


const request = require('superagent');

export const successRequest = (login) => (dispatch) => {
    dispatch({
        type: SIGN_IN_SUCCESS,
        payload: login
    })
};

export const failureRequest = (error) => (dispatch) => {
    dispatch({
        type: SIGN_IN_FAILURE,
        payload: error
    })
};

export function postRequest(state) {
    return (dispatch) => {
        request
            .post('/api/login')
            .send({
                login: state.login,
                password: state.password
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                dispatch(successRequest(state.login))
            })
            .catch(err => {
                dispatch(failureRequest(parseErrors(err)))
            })
    }
}

function parseErrors(errors) {
    if (functions.isEmptyObject(errors.response.body.errors)) {
        return;
    }

    let error = functions.getObject(errors.response.body.errors, 'login');
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

    return sendError;
}