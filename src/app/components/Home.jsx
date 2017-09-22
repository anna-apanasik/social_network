import React from 'react';
import AwesomeComponent from './AwesomeComponent';
import NavBar from "./NavBar";

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <h1 className="display-3">What is a Wall?</h1>
                        <div className="lead"> This is a new social network.
                            <p>You can create a wall for watching the whole world... or only yourself... only your friends.</p>
                            <p>You can do as you want.</p>
                            <p>You can tell about everything and about nothing. Do something unusual or usual and share it.</p>
                            <p>You can remember this year... month... day... moment...</p>
                        </div>
                </div>
            </div>
        );
    }
}
//module.exports = Home;
export default Home;

// <!--Do you have your "wall"?<br>-->
// <!--NO?! HOW?!<br>-->
// <!--You can create your OWN awesome wall now. After that you can do amazing things.<br>-->