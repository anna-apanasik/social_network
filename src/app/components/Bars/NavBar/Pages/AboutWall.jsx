import React from 'react';

class AboutWall extends React.Component {
    render() {
        //TODO edit text
        return (
            <div className="container">
                <h1 className="display-3">What is a Wall?</h1>
                <div className="lead">
                    <hr/>
                    <br/>
                    <p>This is a new social network.</p>
                    <p>You can create a “wall” which the whole world can see…</p>
                    <p>or only your friends…</p>
                    <p>or it could be an inspiration just for you.</p>
                    <p>You can do what you want to.</p>
                    <p>You can tell about everything and about nothing. Do something unusual or usual and share it.</p>
                    <p>You can represent each moment of your life to remember all of them.</p>
                </div>
            </div>

        );
    }
}

export default AboutWall;