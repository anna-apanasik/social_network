import {GET_LOGIN, RECEIVE_INFORMATION, PROFILE_EDIT_FAILURE} from "../../constants/actionsConstants";

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
    success: true
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
                dataOfRegistration: action.payload.createdAt
            });
        case PROFILE_EDIT_FAILURE:
            return Object.assign({}, state, {
                errorEmail: action.payload[0],
                errorPassword: action.payload[1],
                errorConfirmPassword: action.payload[2]
            });

        default:
            return state
    }
}
