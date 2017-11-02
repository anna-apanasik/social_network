import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from 'constants/actionsConstants';
import functions from './functionsForActions'
import * as request from 'superagent';

export const successRequest = () => (dispatch) => {
    dispatch({type: SIGN_UP_SUCCESS})
};

export const failureRequest = (error) => (dispatch) => {
    dispatch({
        type: SIGN_UP_FAILURE,
        payload: error
    })
};

export function postRequest(state) {
    return (dispatch) => {
        request
            .post('/api/signup')
            .send({
                name: state.name,
                surname: state.surname,
                sex: state.sex,
                login: state.login,
                email: state.email,
                password: state.password,
                public_id: state.public_id,
                privateAccount: state.isChecked
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

    if (error = functions.getObject(errors.response.body.errors, 'login')) {
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
