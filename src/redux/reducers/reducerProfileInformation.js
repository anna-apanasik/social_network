import {GET_LOGIN,RECEIVE_INFORMATION} from "../../constants/actionsConstants";

const initialState = {
   login: 'ZZZ',

};

export default function reducerProfileInformation(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN:
            return Object.assign({}, state, {login: action.payload});
        case RECEIVE_INFORMATION:
            return Object.assign({}, state, {});

        //case SIGN_IN_SUCCESS:
       // case SIGN_IN_FAILURE:
       //      return Object.assign({}, state, {
       //          errorLogin: action.payload[0],
       //          errorPassword: action.payload[1],
       //          success: false
       //      });

        default:
            return state
    }
}
