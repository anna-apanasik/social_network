import {GET_LOGIN, RECEIVE_INFORMATION} from "../../constants/actionsConstants";


const request = require('superagent');

export const getLogin = () => (dispatch,getState) => {
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

export function getProfileInformation(login) {
    return (dispatch) => {
        dispatch(getLogin());
        request
            .post('api/profile')
            .send({
                login: login
            })
            .accept('application/json')
            .withCredentials()
            .then((information) => {
                // dispatch(receiveInformation(information))
            })
            .catch(e => {
                dispatch(receiveInformation(e));
                console.log('error get profile info' + e);
            })
    }
}