import React from 'react';
import AwesomeComponent from './AwesomeComponent';

class Home extends React.Component {
    render() {
        return (
            <div>
                <AwesomeComponent />
                <p> Hello React project</p>
            </div>
        );
    }
}
//module.exports = Home;
export default Home;