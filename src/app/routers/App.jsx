import React from 'react';
import {Route, Router, Link} from 'react-router-dom';
import Home from "../components/Home";

const App = () => (
    <div>

        <div>
            <Route path="/" component={Home}/>
        </div>
    </div>
)


export default App;