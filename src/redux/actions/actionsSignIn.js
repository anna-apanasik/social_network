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

export const successRequest = () => (dispatch) => {
    //const user = getState().reducerSignUp.name;
    dispatch({type: SIGN_IN_SUCCESS})
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