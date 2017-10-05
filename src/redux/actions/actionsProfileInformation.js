import {GET_LOGIN, RECEIVE_INFORMATION, RECEIVE_ERROR} from "../../constants/actionsConstants";


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

