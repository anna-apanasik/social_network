import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
} from "../../constants/actionsConstants";

export const initialState = {
    login:'',
    errorLogin: '',
    errorPassword: '',
    success: false
};

export default function reducerSignIn(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {login:action.payload, errorLogin: '', errorPassword: '', success: true});
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
