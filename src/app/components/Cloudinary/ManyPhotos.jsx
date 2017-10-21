import React from 'react';
import {CloudinaryContext} from 'cloudinary-react';
import {CLOUDINARY_NAME} from "constants/cloudinaryConstants"
import OnePhoto from "./OnePhoto";

class ManyPhotos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {photos} = this.props;
        return (
            <CloudinaryContext cloudName={CLOUDINARY_NAME}>
                {photos.map(item => <OnePhoto public_id={item.public_id} description={item.original_filename}
                                              width={'50'} height={'50'}/>)}
            </CloudinaryContext>
        )
    }
}

ManyPhotos.PropTypes = {
    photos: React.PropTypes.string.isRequired
};

export default ManyPhotos;