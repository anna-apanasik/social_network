import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT
} from "constants/actionsConstants";

export const initialState = {
    login: '',
    errorLogin: '',
    errorPassword: '',
    success: false
};

export default function reducerSignIn(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {...state, login: action.payload, errorLogin: '', errorPassword: '', success: true};

        case SIGN_IN_FAILURE:
            return {
                ...state,
                errorLogin: action.payload[0],
                errorPassword: action.payload[1],
                success: false
            };

        case SIGN_OUT:
            return {
                ...state,
                login: '',
                success: false
            };
        default:
            return state
    }
}
