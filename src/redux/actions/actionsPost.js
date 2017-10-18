import {GET_USER_ID, GET_LIST_OF_POSTS} from "constants/actionsConstants"

const request = require('superagent');


export const getUserID = () => (dispatch, getState) => {
    let id = getState().reducerProfileInformation.userId;
    //TODO delete console log  and check: this fun need
    console.log("id  " + id);
    dispatch({
        type: GET_USER_ID,
        payload: id
    })
};

export function createPost(data) {
    //TODO check need dispatch
    return (dispatch, getState) => {
        request
            .post('api/newpost')
            .send({
                userId: getState().reducerProfileInformation.userId,
                title: data.title,
                text: data.text
            })
            .accept('application/json')
            .withCredentials()
            // .then(() => {

            //     console.log('note was created');
            // })
            .catch(e => {
                //TODO error in create( empty textarea field)
                console.log("errors in create note " + e);
            })
    }
}

export function deletePost(data) {
    return () => {
        request
            .post('api/deletepost')
            .send({
                noteId: data.noteId
            })
            .accept('application/json')
            .withCredentials()
            .then(() => {
                //TODO error in delete
                console.log('note was deleted');
            })
            .catch(e => {
                //TODO error in delete
                console.log("errors in delete note " + e);
            })
    }
}
