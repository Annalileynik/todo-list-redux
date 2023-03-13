import React, { useState } from 'react';
import  "bootstrap/dist/css/bootstrap.min.css"
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditModal(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [input, setInput] = useState(props.item.title)
    const [isDone, setIsDone]=useState(false)

    const onEditTitle = () => {
        toggle();
        const newTitle = {
            title:input,
            isDone:false
        }
        props.editTask(props.item, newTitle)
    }
    console.log(props.item.id)
    return (
        <div>
            <Button className="btn btn-danger" onClick={toggle}>
                Edit
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">New Title:</span>
                        <input
                            value={input}
                            onChange={(event)=>setInput(event.target.value)}
                            type="text" className="form-control" placeholder="Username" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="form-check form-switch">
                        <input
                            value={isDone}
                            onChange={()=>setIsDone(!isDone)}
                            className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox
                                input</label>
                    </div>



                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onEditTitle}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    editTask: (id, newTitle)=>dispatch({type: "UPDATE_TASK",payload:{id, newTitle}})
})
export default connect(null, mapDispatchToProps)(EditModal);;
