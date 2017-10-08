import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap'

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    handleEnterTitle(e) {
        this.setState({title: e.target.value});
    }

    handleEnterText(e) {
        this.setState({text: e.target.value});
    }

    hideModal() {
//TODO close modal
        //TODO create reducer with data, login,
        //TODO isOpen

        // this.setState({
        //     isOpen: false
        // });
    };

    saveNote() {
        //TODO save a new note
        // this.setState({
        //     isOpen: false
        // });
    }

    render() {
        const{isOpen} =this.props;
        return (
            <div>
                <Modal isOpen={isOpen} onRequestHide={this.hideModal.bind(this)}>
                    <ModalHeader>
                        <ModalClose onClick={this.hideModal.bind(this)}/>
                        <ModalTitle>Add a new note</ModalTitle>
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
                                <label>Note</label>
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
NewNote.PropTypes={
    isOpen: React.PropTypes.boolean
}
export default NewNote;