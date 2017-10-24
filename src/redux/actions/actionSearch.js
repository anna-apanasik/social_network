import {NOT_FOUND} from "constants/actionsConstants";

const request = require('superagent');

export function notFound() {
    return (dispatch) => {
        dispatch({
            type: NOT_FOUND
        })
    }
}


export function search(search) {
    return (dispatch) => {
        request
            .post('api/search')
            .send({
                search: search
            })
            .accept('application/json')
            .withCredentials()
            .then(res => {
                //TODO delete console.log
                console.log("data ")
                console.log(res)
                if (res.body.users === [] && res.body.posts === []) {
                    dispatch(notFound());
                }
            })
            .catch(e => {
                //TODO delete console.log
                //TODO error in get posts
                console.log("errors in find posts " + e);
            })
    }

}