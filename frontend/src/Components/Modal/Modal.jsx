import React from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalFooter, ModalTitle } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const MyModal = ({show, handleClose}) => {
  return (
    <Modal show={show} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">Editar To-Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleClose}>Save changes</Button>
        </Modal.Footer>
    </Modal>   
  )
}
