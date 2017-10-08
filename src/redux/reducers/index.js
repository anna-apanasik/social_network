import { combineReducers } from 'redux'
import reducerSignUp from './reducerSignUp'
import reducerSignIn from "./reducerSignIn";
import reducerProfileInformation from "./reducerProfileInformation";
import reducerNotes from "./reducerNotes";

export default combineReducers({
    reducerSignUp: reducerSignUp,
    reducerSignIn: reducerSignIn,
    reducerProfileInformation: reducerProfileInformation,
    reducerNotes:reducerNotes
})