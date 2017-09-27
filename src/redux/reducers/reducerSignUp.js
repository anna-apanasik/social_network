import {
    SET_NAME,
    SET_SURNAME,
    SET_SEX,
    SET_LOGIN,
    SET_EMAIL,
    SET_PASSWORD,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../../constants/actionsConstants';


const initialState = {
    name: '',
    surname: '',
    sex: '',
    login: '',
    email: '',
    password: '',
    errorLogin: '',
    errorEmail: '',
    errorPassword: '',
    success: false
};

export default function reducerSignUp(state = initialState, action) {
    switch (action.type) {
        case SET_NAME:
            return Object.assign({}, state, {name: action.payload});
        case SET_SURNAME:
            return Object.assign({}, state, {surname: action.payload});
        case SET_SEX:
            return Object.assign({}, state, {sex: action.payload});
        case SET_LOGIN:
            return Object.assign({}, state, {login: action.payload});
        case SET_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case SET_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        case SIGN_UP_REQUEST:
            return Object.assign({}, state, {errorEmail: '', errorLogin: '', errorPassword: ''});
        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, {errorEmail: '', errorLogin: '', errorPassword: '', success: true});
        case SIGN_UP_FAILURE:
            return  Object.assign({}, state, {errorEmail: action.payload[0], errorLogin: action.payload[1], errorPassword: action.payload[2], success: false});

        default:
            return state
    }
}
