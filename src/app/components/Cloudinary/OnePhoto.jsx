import './stylesForPhotos.less'
import React from 'react';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {CLOUDINARY_NAME, CLOUDINARY_UPLOAD_URL} from "constants/cloudinaryConstants";

class OnePhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {public_id, width, height, description} = this.props;
        return (
            <CloudinaryContext cloudName={CLOUDINARY_NAME}>
                <div className="Photo img">
                    <a target="_blank"
                       href={CLOUDINARY_UPLOAD_URL + public_id + '.jpg'}>
                        <Image publicId={public_id}>
                            <Transformation
                                crop="scale"
                                width={width || "150"}
                                height={height || "150"}
                                dpr="auto"
                                responsive_placeholder="blank"/>
                        </Image>
                        <label>{description}</label>
                    </a>
                </div>
            </CloudinaryContext>
        )
    }
}

OnePhoto.PropTypes = {
    public_id: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired
};

export default OnePhoto;