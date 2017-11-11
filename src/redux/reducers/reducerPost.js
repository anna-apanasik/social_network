import {
    GET_LIST_OF_POSTS,
    CREATE_POST,
    DELETE_POST,
    EDIT_POST_DATA,
    RESET_EDIT_POST_DATA,
    EDIT_POST_FLAG
} from "constants/actionsConstants"

const initialState = {
    listOfPosts: [],
    photo: [],
    createPost: false,
    deletePost: false,
    updatePost: false,
    titleEditPost: '',
    textEditPost: '',
    postIdEditPost: ''
};

export default function reducerPost(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_OF_POSTS:
            return {
                ...state,
                listOfPosts: action.payload.posts,
                photos: action.payload.photos,
                createPost: false,
                deletePost: false,
                updatePost: false
            };

        case CREATE_POST:
            return {...state, createPost: true};

        case DELETE_POST:
            return {...state, deletePost: true};

        case EDIT_POST_DATA:
            return {
                ...state,
                titleEditPost: action.payload.titleEditPost,
                textEditPost: action.payload.textEditPost,
                postIdEditPost: action.payload.postIdEditPost
            };

        case RESET_EDIT_POST_DATA: {
            return {...state, titleEditPost: '', textEditPost: '', postIdEditPost: ''};
        }

        case EDIT_POST_FLAG: {
            return {...state, updatePost: true};
        }

        default:
            return state
    }
}