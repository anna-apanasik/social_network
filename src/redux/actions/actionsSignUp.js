import {
    SET_NAME,
    SET_SURNAME,
    SET_SEX,
    SET_LOGIN,
    SET_EMAIL,
    SET_PASSWORD,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../../constants/actionsConstants';

const request = require('superagent');

export function setSurname(surname) {
    return (dispatch) =>
        dispatch({
            type: SET_SURNAME,
            payload: surname
        })
}

export function setName(name) {
    return (dispatch) =>
        dispatch({
            type: SET_NAME,
            payload: name
        })
}

export function setSex(sex) {
    return (dispatch) =>
        dispatch({
            type: SET_SEX,
            payload: sex
        })
}

export function setLogin(login) {
    return (dispatch) =>
        dispatch({
            type: SET_LOGIN,
            payload: login
        })
}

export function setEmail(email) {
    return (dispatch) =>
        dispatch({
            type: SET_EMAIL,
            payload: email
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
            type: SIGN_UP_REQUEST
        })
    }
}

export function successRequest() {
    return (dispatch) => {
        dispatch({
            type: SIGN_UP_SUCCESS
        })
    }
}

export function failureRequest(error) {
    return (dispatch) => {
        dispatch({
            type: SIGN_UP_FAILURE,
            payload: error
        })
    }
}

export function postRequest(state) {
    return (dispatch) => {
        dispatch(sendRequest());
        request
            .post('/api/signup')
            .send({
                name: state.name,
                surname: state.surname,
                sex: state.sex,
                login: state.login,
                email: state.email,
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

    let error = getObject(errors.response.body.errors, 'email');
    if(isEmptyObject(error)){
        return ;
    }
    let sendError = [];

    if (error) {
        sendError.push(error.msg);
    } else {
        sendError.push('');
    }

    if (error = getObject(errors.response.body.errors, 'login')) {
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

function getObject(array, searchValue) {
    let i = array.length;
    while (i--) {
        if (array[i].param == searchValue) {
            return array[i];
        }
    }
}
function isEmptyObject(emptyObject) {
    return JSON.stringify(emptyObject) === '{}';
}
