import {GET_LOGIN, RECEIVE_INFORMATION,PROFILE_EDIT_SUCCESS, PROFILE_EDIT_FAILURE,RESET_SUCCESS} from "../../constants/actionsConstants";

const initialState = {
    login: '',
    name: '',
    surname: '',
    sex: '',
    email: '',
    password: '',
    confirmPassword: '',
    dataOfRegistration: '',
    errorEmail: undefined,
    errorPassword: undefined,
    errorConfirmPassword: undefined,
    success: false
};

export default function reducerProfileInformation(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN:
            return Object.assign({}, state, {login: action.payload});
        case RECEIVE_INFORMATION:
            return Object.assign({}, state, {
                login: action.payload.login,
                name: action.payload.name,
                surname: action.payload.surname,
                sex: action.payload.sex,
                email: action.payload.email,
                password: action.payload.password,
                confirmPassword:action.payload.password,
                dataOfRegistration: action.payload.createdAt
            });
        case PROFILE_EDIT_SUCCESS:
            return Object.assign({}, state, {
               name: action.payload.name,
                surname:action.payload.surname,
                sex: action.payload.sex,
                email:action.payload.email,
                password:action.payload.password,
                confirmPassword:action.payload.password,
                success:true
            });
        case PROFILE_EDIT_FAILURE:
            return Object.assign({}, state, {
                errorEmail: action.payload[0],
                errorPassword: action.payload[1],
                errorConfirmPassword: action.payload[2]
            });
        case RESET_SUCCESS:
            return Object.assign({}, state, {
               success:false
            });

        default:
            return state
    }
}
