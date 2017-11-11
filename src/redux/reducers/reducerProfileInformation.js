import {
    RECEIVE_INFORMATION,
    PROFILE_EDIT_SUCCESS,
    PROFILE_EDIT_FAILURE,
    RESET_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    EDIT_POST
} from "constants/actionsConstants";

const initialState = {
    login: '',
    name: '',
    surname: '',
    sex: '',
    email: '',
    password: '',
    confirmPassword: '',
    dataOfRegistration: '',
    public_id: '',
    privateAccount: '',
    userId: undefined,
    errorEmail: undefined,
    errorPassword: undefined,
    errorConfirmPassword: undefined,
    success: false,
    editPost: false,
    isOpen: false
};

export default function reducerProfileInformation(state = initialState, action) {
    switch (action.type) {

        case RECEIVE_INFORMATION:
            return {
                ...state,
                login: action.payload.login,
                name: action.payload.name,
                surname: action.payload.surname,
                sex: action.payload.sex,
                email: action.payload.email,
                password: action.payload.password,
                confirmPassword: action.payload.password,
                dataOfRegistration: action.payload.createdAt,
                public_id: action.payload.public_id,
                userId: action.payload.userId,
                privateAccount: action.payload.privateAccount
            };

        case PROFILE_EDIT_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                sex: action.payload.sex,
                email: action.payload.email,
                password: action.payload.password,
                confirmPassword: action.payload.password,
                privateAccount: action.payload.privateAccount,
                success: true
            };

        case PROFILE_EDIT_FAILURE:
            return {
                ...state,
                errorEmail: action.payload[0],
                errorPassword: action.payload[1],
                errorConfirmPassword: action.payload[2]
            };

        case RESET_SUCCESS:
            return {
                ...state,
                success: false
            };

        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            };

        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                editPost: false
            };
        case  EDIT_POST:
            return {
                ...state,
                isOpen: true,
                editPost: true
            };
        default:
            return state
    }
}
