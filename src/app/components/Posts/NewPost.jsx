import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionsPost from 'redux/actions/actionsPost'
import {CLOUDINARY_NAME, CLOUDINARY_UPLOAD_PRESET} from 'constants/cloudinaryConstants'
import ManyPhotos from "../Cloudinary/ManyPhotos";

const styles = {
    photos: {
        marginTop: "10px"
    }
};

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            text: this.props.text,
            photos: '',
            error: ''
        }
    }

    handleEnterTitle(e) {
        this.setState({title: e.target.value});
    }

    handleEnterText(e) {
        this.setState({text: e.target.value});
    }

    hideModal(e) {
        e.preventDefault();
        this.props.closeModal();
        this.setState({title: '', text: '', photos: ''})
    };

    saveNote(e) {
        e.preventDefault();
        if (this.state.text === '') {
            //TODO validation on the server side
            this.setState({error: 'Empty text field'});
            return;
        }
        this.props.notesActions.createPost(this.state);
        this.hideModal(e)
    }

    handleAddPhoto(e) {
        e.preventDefault();
        return new Promise((resolve, reject) =>
            cloudinary.openUploadWidget({
                    cloud_name: CLOUDINARY_NAME,
                    upload_preset: CLOUDINARY_UPLOAD_PRESET,
                    max_files: 5,
                    tags: ['xmas']
                },
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else if (error) {
                        reject(error.message);
                    }
                }))
            .then(photos => {
                this.setState({photos: photos});
            })
            .catch(e => {
                //TODO delete console.log
                console.log(e)
            })

    }

    render() {
        const {isOpen, editPost, title, text} = this.props;
        return (
            <div>
                <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
                    <ModalHeader>
                        <ModalTitle>Post</ModalTitle>
                        <ModalClose onClick={this.hideModal.bind(this)}/>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text"
                                   value={this.state.title}
                                   onChange={this.handleEnterTitle.bind(this)}
                                   className="form-control form-control-sm"
                                   placeholder="Enter title"/>
                            <div className="form-group">
                                <label>Text</label>
                                <textarea className="form-control"
                                          rows="3"
                                          value={this.state.text}
                                          onChange={this.handleEnterText.bind(this)}
                                          placeholder="Enter text"/>
                                <span className="badge badge-danger">{this.state.error}</span>
                            </div>
                        </div>
                        <button type="button"
                                onClick={this.handleAddPhoto.bind(this)}
                                className="btn btn-primary btn-sm">Add photos
                        </button>
                        <div style={styles.photos}>
                            {this.state.photos === '' ? null : <ManyPhotos photos={this.state.photos}/>}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-primary' onClick={this.saveNote.bind(this)}>
                            Save
                        </button>
                        <button className='btn btn-default' onClick={this.hideModal.bind(this)}>
                            Close
                        </button>
                    </ModalFooter>
                </Modal>
            </div>)

    }
}

NewNote.PropTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    editPost: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    closeModal: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        notesActions: bindActionCreators(actionsPost, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(NewNote)