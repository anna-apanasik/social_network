import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SET_LOGIN,
    SET_PASSWORD
} from "../../constants/actionsConstants";

const initialState = {
    login: '',
    password: '',
    errorLogin: '',
    errorPassword: '',
    success: false
};

export default function reducerSignIn(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return Object.assign({}, state, {login: action.payload});
        case SET_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        case SIGN_IN_REQUEST:
            return Object.assign({}, state, {errorLogin: '', errorPassword: ''});
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {errorLogin: '', errorPassword: '', success: true});
        case SIGN_IN_FAILURE:
            return Object.assign({}, state, {
                errorLogin: action.payload[0],
                errorPassword: action.payload[1],
                success: false
            });
        default:
            return state
    }
}
