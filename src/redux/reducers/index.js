import { combineReducers } from 'redux'
import reducerSignUp from './reducerSignUp'
import reducerSignIn from "./reducerSignIn";

export default combineReducers({
    reducerSignUp: reducerSignUp,
    reducerSignIn: reducerSignIn
})