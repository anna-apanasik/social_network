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


class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            title: this.props.title,
            text: this.props.text
        }
    }

    // componentWillMount() {
    //     console.log("text and title " + this.state.text + this.state.title)
    // }

    handleEnterTitle(e) {
        this.setState({title: e.target.value});
    }

    handleEnterText(e) {
        this.setState({text: e.target.value});
    }

    hideModal(e) {
        e.preventDefault();
        this.props.closeModal();
        this.setState({title: '', text: ''})
    };

    saveNote(e) {
        e.preventDefault();
        this.props.notesActions.createPost(this.state);
        this.hideModal(e)
    }

    render() {
        const {isOpen, editPost, title, text} = this.props;
        console.log("text and title " + this.state.text + this.state.title);
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
                                   value={editPost ? title : this.state.title}
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
                            </div>
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

function mapStateToProps(state) {
    return {
        userId: state.reducerPost.userId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        notesActions: bindActionCreators(actionsPost, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)