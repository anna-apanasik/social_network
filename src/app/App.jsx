import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import HomePage from "./components/Bars/NavBar/Pages/Home/HomePage";
import NavBar from "./components/Bars/NavBar/NavBar";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import SignIn from "./components/SignIn";
import SignUpSuccess from "./components/SignUp/SignUpSuccess";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ProfileEdit from "./components/Profile/ProfileEdit";
import AboutWall from "./components/Bars/NavBar/Pages/AboutWall";
import FooterBar from "./components/Bars/FooterBar/FooterBar";
import AboutUs from "./components/Bars/FooterBar/AboutUs";
import ContactUs from "./components/Bars/FooterBar/ContactUs";
import UserProfile from "./components/Profile/UserProfile";


const App = (props) => (
    <div>
        <header>
            <FooterBar/>
            {window.location.pathname === '/home' ? <NavBar resetSearch={false}/> : <NavBar resetSearch={true}/>}
        </header>
        <div>
            <Switch>
                <Route exact path="/" component={AboutWall}/>
                <Route path='/home' component={HomePage}/>
                <Route path='/about_us' component={AboutUs}/>
                <Route path='/contact_us' component={ContactUs}/>
                <Route path='/sign_in' component={SignIn}/>
                <Route path='/sign_up' component={SignUpContainer}/>
                <PrivateRoute path="/success_sign_up" component={SignUpSuccess} login={props.success}/>
                <PrivateRoute path="/profile" component={ProfileContainer} login={props.login}/>
                <PrivateRoute path="/profile_edit" component={ProfileEdit} login={props.login}/>
                <Route path='/:login' component={UserProfile}/>
            </Switch>
        </div>
    </div>
);

const PrivateRoute = ({component: Component, login, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            login ? (<Component {...props} />) : (<Redirect to={{pathname: '/'}}/>)
        )}
    />
);

function mapStateToProps(state) {
    return {
        login: state.reducerSignIn.login,
        success: state.reducerSignUp.success
    }
}

export default withRouter(connect(mapStateToProps)(App));
