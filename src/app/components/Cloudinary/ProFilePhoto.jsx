import React from 'react';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
import {CLOUDINARY_NAME, CLOUDINARY_UPLOAD_URL} from "constants/cloudinaryConstants";

class ProFilePhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {public_id} = this.props;
        return (
            <CloudinaryContext cloudName={CLOUDINARY_NAME}>
                <div className="img">
                    <a target="_blank"
                       href={CLOUDINARY_UPLOAD_URL + public_id + '.jpg'}>
                        <Image publicId={public_id}>
                            <Transformation
                                crop="scale"
                                width="150"
                                height="150"
                                dpr="auto"
                                responsive_placeholder="blank"
                            />
                        </Image>
                    </a>
                </div>
            </CloudinaryContext>
        )
    }
}

ProFilePhoto.PropTypes = {
    public_id: React.PropTypes.string.isRequired
};

export default ProFilePhoto;