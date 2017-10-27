import { combineReducers } from 'redux'
import reducerSignUp from './reducerSignUp'
import reducerSignIn from "./reducerSignIn";
import reducerProfileInformation from "./reducerProfileInformation";
import reducerPost from "./reducerPost";
import reducerSearch from "./reducerSearch";

export default combineReducers({
    reducerSignUp: reducerSignUp,
    reducerSignIn: reducerSignIn,
    reducerProfileInformation: reducerProfileInformation,
    reducerPost: reducerPost,
    reducerSearch: reducerSearch
})