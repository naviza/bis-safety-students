import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, Form} from 'react-bootstrap';
import {React, useState} from 'react'

const EditUser = ({show, handleClose, user, submitEditUser}) => {
    const [username, setUsername] = useState(user.username)
    let changeUsername = (e) => {
        setUsername(e.target.value)
      }
    const [address, setAddress] = useState(user.address)
    let changeAddress = (e) => {
        setAddress(e.target.value)
      }

  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User: {user.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            
          <Form.Group controlid="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder={username} onChange={changeUsername} value={username}></Form.Control>
            </Form.Group>

            
            <Form.Group controlid="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder={address} onChange={changeAddress} value={address}></Form.Control>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => {submitEditUser(user.id, username, address); handleClose()}}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditUser