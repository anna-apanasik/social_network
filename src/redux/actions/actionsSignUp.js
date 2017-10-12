import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from 'constants/actionsConstants';
import functions from './functionsForActions'

const request = require('superagent');

export const successRequest = () => (dispatch, getState) => {
    //const user = getState().reducerSignUp.name;
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

// export default function getObject(array, searchValue) {
//     let i = array.length;
//     while (i--) {
//         if (array[i].param == searchValue) {
//             return array[i];
//         }
//     }
// }
//
// function isEmptyObject(emptyObject) {
//     return JSON.stringify(emptyObject) === '{}';
// }
