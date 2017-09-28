import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SET_LOGIN,
    SET_PASSWORD
} from "../../constants/actionsConstants";
import getObject from './actionsSignUp'
import isEmptyObject from './actionsSignUp'

const request = require('superagent');

export function setLogin(login) {
    return (dispatch) =>
        dispatch({
            type: SET_LOGIN,
            payload: login
        })
}

export function setPassword(password) {
    return (dispatch) =>
        dispatch({
            type: SET_PASSWORD,
            payload: password
        })
}

export function sendRequest() {
    return (dispatch) => {
        dispatch({
            type: SIGN_IN_REQUEST
        })
    }
}

export function successRequest() {
    return (dispatch) => {
        dispatch({
            type: SIGN_IN_SUCCESS
        })
    }
}

export function failureRequest(error) {
    return (dispatch) => {
        dispatch({
            type: SIGN_IN_FAILURE,
            payload: error
        })
    }
}

export function postRequest(state) {
    return (dispatch) => {
        dispatch(sendRequest());
        request
            .post('/api/login')
            .send({
                login: state.login,
                password: state.password
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                dispatch(successRequest())
            })
            .catch(err => {
                dispatch(failureRequest(parseErrors(err)))
            })
    }

}

function parseErrors(errors) {

    let error = getObject(errors.response.body.errors, 'login');
 //   if (isEmptyObject(error)) {
  //      return;
  //  }
    let sendError = [];

    if (error) {
        sendError.push(error.msg);
    } else {
        sendError.push('');
    }

    if (error = getObject(errors.response.body.errors, 'password')) {
        sendError.push(error.msg);
    } else {
        sendError.push('');
    }

    return sendError;
}