import React from 'react';

const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + imgUrl + ')',
};

class BackgroundImage extends React.Component{
    render(){
        return <Image
            style={{
                flex: 1,
                resizeMode,
            }}
            source={{ uri: remote }}
        />
    }
}
export default BackgroundImage;