import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody
} from 'react-modal-bootstrap'
import {Dropzone} from 'react-dropzone';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as signUpActions from 'redux/actions/actionsSignUp'

class DropZoneImage extends React.Component {
    constructor(props) {
        super(props);
    }

    onImageDrop(files) {
        // this.setState({
        //     uploadedFile: files[0]
        // });

        this.handleImageUpload(files[0]);
    };

    hideModal(e) {
        e.preventDefault();
        this.props.signUpActions.closeModal();
    };

    handleImageUpload(file) {
        // let upload = request.post(CLOUDINARY_UPLOAD_URL)
        //     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        //     .field('file', file);
        //
        // upload.end((err, response) => {
        //     if (err) {
        //         console.error(err);
        //     }
        //
        //     if (response.body.secure_url !== '') {
        //         this.setState({
        //             uploadedFileCloudinaryUrl: response.body.secure_url
        //         });
        //     }
        // });
    }

    render() {
        const {uploadedFile, uploadedFileCloudinaryUrl, isOpen} = this.props;
        return (
            <div>
                <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
                    <ModalHeader>
                        <ModalTitle>Add photo</ModalTitle>
                        <ModalClose onClick={this.hideModal.bind(this)}/>
                    </ModalHeader>
                    <ModalBody>
                        <Dropzone>
                            <p>Try dropping some files here, or click to select files to upload.</p>
                        </Dropzone>
                    </ModalBody>
                </Modal>
            </div>)

    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.reducerSignUp.isOpen,
        uploadedFile: state.reducerSignUp.uploadedFile,
        uploadedFileCloudinaryUrl: state.reducerSignUp.uploadedFileCloudinaryUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUpActions: bindActionCreators(signUpActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropZoneImage);

