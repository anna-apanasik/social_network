import {NOT_FOUND, FOUND_USERS_OR_POSTS, RESET_SEARCH, GET_LOGIN, GET_PHOTOS} from "constants/actionsConstants";

const initialState = {
    search: undefined,
    users: [],
    posts: [],
    login: undefined,
    photos: []
};

export default function reducerSearch(state = initialState, action) {
    switch (action.type) {
        case NOT_FOUND:
            return Object.assign({}, state, {search: NOT_FOUND});

        case FOUND_USERS_OR_POSTS:
            return Object.assign({}, state, {
                search: FOUND_USERS_OR_POSTS,
                users: action.payload.users,
                posts: action.payload.posts
            });

        case RESET_SEARCH:
            return Object.assign({}, state, {search: undefined});

        case GET_LOGIN:
            return Object.assign({}, state, {login: action.payload});

        case GET_PHOTOS:
            return Object.assign({}, state, {photos: action.payload});

        default:
            return state
    }
}