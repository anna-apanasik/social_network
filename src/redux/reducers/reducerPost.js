import {GET_LIST_OF_POSTS, CREATE_POST, DELETE_POST} from "constants/actionsConstants"

const initialState = {
    listOfPosts: [],
    photo: [],
    createPost: false,
    deletePost: false
};

export default function reducerPost(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_OF_POSTS:
            return Object.assign({}, state, {
                listOfPosts: action.payload.posts,
                photos: action.payload.photos,
                createPost: false,
                deletePost: false
            });
        case CREATE_POST:
            return Object.assign({}, state, {createPost: true});
        case DELETE_POST:
            return Object.assign({}, state, {deletePost: true});

        default:
            return state
    }
}