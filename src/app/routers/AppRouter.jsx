import React from 'react';
import {Route, BrowserRouter,Link} from 'react-router-dom';
import Home from "../Home";

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home} />
            </div>
        )
    }
}



export default AppRouter;