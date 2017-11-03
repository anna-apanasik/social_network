import './stylesForPages.less'
import React from 'react';

class AboutWall extends React.Component {
    render() {
        return (
            <div className="AboutWall">
                <h1 className="display-3">What is a Wall?</h1>
                <hr/>
                <div className="lead">
                    <p>This is a new social network.</p>
                    <p>You can create a “wall” which the whole world can see…</p>
                    <p className="right">or only your friends…</p>
                    <p className="double-right">or it could be an inspiration just for you.</p>
                    <p>You can do what you want to.</p>
                    <p>You can tell about everything and about nothing.</p>
                    <p className="right">Do something unusual or usual and share it.</p>
                    <p>You can represent each moment of your life to remember all of them.</p>
                </div>
            </div>
        );
    }
}

export default AboutWall;