import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import AwesomeComponent from "../components/AwesomeComponent";
import SignUp from "../components/SignUp";

const App = () => (
    <div>
        <header>
            <NavBar/>
        </header>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/api" component={Api}/>

        </div>
    </div>
);

const Api = () => (
    <main>
        <Switch>
            <Route path='/api/about' component={AwesomeComponent}/>
            {/*<Route path='/api/contact' component={}/>*/}
            {/*<Route path='/api/login' component={}/>*/}
            <Route path='/api/registration' component={SignUp}/>
        </Switch>
    </main>
);

export default App;