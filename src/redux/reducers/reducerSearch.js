import {
    NOT_FOUND,
    FOUND_USERS_OR_POSTS,
    RESET_SEARCH,
    GET_LATEST_POSTS
} from "constants/actionsConstants";

const initialState = {
    search: undefined,
    users: [],
    posts: [],
    latestPosts: [],
    usersForPosts: [],
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
                posts: action.payload.posts,
                photos: action.payload.photos,
                usersForPosts: action.payload.usersForPosts
            });
//TODO clear state(maybe don't need)
        case RESET_SEARCH:
            return Object.assign({}, state, {search: undefined});

        case GET_LATEST_POSTS:
            return Object.assign({}, state, {
                latestPosts: action.payload.posts,
                photos: action.payload.photos,
                usersForPosts: action.payload.usersForPosts
            });

        default:
            return state
    }
}