import {CREATE_NEW_NOTE} from "../../constants/actionsConstants"

const request = require('superagent');

export const createNewNote = (data) => (dispatch) => {
    dispatch({
        type: CREATE_NEW_NOTE,
        payload: data
    })
};

export function createNote(data) {
    return (dispatch, getState) => {
        request
            .post('api/new_note')
            .send({
                userId: getState().reducerProfileInformation.userId,
                title: data.title,
                text: data.text
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                console.log('note was created');
            })
            .catch(e => {
                console.log("errors in create note " + e);
            })
    }
}
