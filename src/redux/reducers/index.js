import { combineReducers } from 'redux'
import reducerSignUp from './reducerSignUp'
import reducerSignIn from "./reducerSignIn";
import reducerProfileInformation from "./reducerProfileInformation";

export default combineReducers({
    reducerSignUp: reducerSignUp,
    reducerSignIn: reducerSignIn,
    reducerProfileInformation: reducerProfileInformation
})