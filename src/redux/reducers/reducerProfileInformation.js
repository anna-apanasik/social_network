import {GET_LOGIN, RECEIVE_INFORMATION} from "../../constants/actionsConstants";

const initialState = {
    login: '',
    name: '',
    surname: '',
    sex: '',
    email: '',
    dataOfRegistration:''
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
                sex:action.payload.sex,
                email: action.payload.email,
                dataOfRegistration: action.payload.createdAt
            });


        default:
            return state
    }
}
